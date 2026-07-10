"use client";

import {
  createContext,
  forwardRef,
  type InputHTMLAttributes,
  type ReactNode,
  type SelectHTMLAttributes,
  type TextareaHTMLAttributes,
  useContext,
  useId,
} from "react";
import { IconButton } from "./Button";

interface FieldContextValue {
  controlId: string;
  describedBy?: string;
  invalid: boolean;
}

const FieldContext = createContext<FieldContextValue | null>(null);

export interface FieldProps {
  id?: string;
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  className?: string;
  children: ReactNode;
}

/** Persistent label, hint and error contract for form controls. */
export function Field({
  id,
  label,
  hint,
  error,
  required = false,
  className = "",
  children,
}: FieldProps) {
  const generatedId = useId();
  const controlId = id ?? `ds-field-${generatedId}`;
  const hintId = hint ? `${controlId}-hint` : undefined;
  const errorId = error ? `${controlId}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div className={`ds-field ${className}`}>
      <label className="ds-field-label" htmlFor={controlId}>
        {label}
        {required ? (
          <span className="ds-field-required" aria-hidden>
            *
          </span>
        ) : null}
      </label>
      <FieldContext.Provider
        value={{ controlId, describedBy, invalid: Boolean(error) }}
      >
        {children}
      </FieldContext.Provider>
      {hint ? (
        <p id={hintId} className="ds-field-hint">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} className="ds-field-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function useFieldAttributes(
  id: string | undefined,
  describedBy: string | undefined,
  invalid: boolean | undefined,
) {
  const context = useContext(FieldContext);
  return {
    id: id ?? context?.controlId,
    "aria-describedby": describedBy ?? context?.describedBy,
    "aria-invalid": (invalid ?? context?.invalid) || undefined,
  };
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className = "", id, "aria-describedby": describedBy, invalid, ...props },
  ref,
) {
  return (
    <input
      {...props}
      {...useFieldAttributes(id, describedBy, invalid)}
      ref={ref}
      className={`ds-field-control ${className}`}
    />
  );
});

export interface SearchFieldProps extends Omit<InputProps, "type"> {
  label: string;
  onClear?: () => void;
}

/** Search input with a visible label and an optional accessible clear action. */
export const SearchField = forwardRef<HTMLInputElement, SearchFieldProps>(
  function SearchField(
    { label, onClear, value, defaultValue, className = "", ...props },
    ref,
  ) {
    const hasValue =
      typeof value === "string"
        ? value.length > 0
        : typeof defaultValue === "string" && defaultValue.length > 0;
    return (
      <div className={`ds-search-field ${className}`}>
        <span className="ds-search-icon" aria-hidden>
          ⌕
        </span>
        <Input
          {...props}
          ref={ref}
          type="search"
          value={value}
          defaultValue={defaultValue}
          aria-label={label}
          className="ds-search-input"
        />
        {onClear && hasValue ? (
          <IconButton
            label={`Clear ${label.toLowerCase()}`}
            variant="quiet"
            size="small"
            onClick={onClear}
            className="ds-search-clear"
          >
            <span aria-hidden>×</span>
          </IconButton>
        ) : null}
      </div>
    );
  },
);

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea(
    { className = "", id, "aria-describedby": describedBy, invalid, ...props },
    ref,
  ) {
    return (
      <textarea
        {...props}
        {...useFieldAttributes(id, describedBy, invalid)}
        ref={ref}
        className={`ds-field-control ds-textarea ${className}`}
      />
    );
  },
);

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
  description?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox(
    { label, description, className = "", id, ...props },
    ref,
  ) {
    const generatedId = useId();
    const controlId = id ?? `ds-checkbox-${generatedId}`;
    const descriptionId = description ? `${controlId}-description` : undefined;

    return (
      <label className={`ds-checkbox ${className}`} htmlFor={controlId}>
        <input
          {...props}
          ref={ref}
          id={controlId}
          type="checkbox"
          aria-describedby={descriptionId}
        />
        <span>
          <span className="ds-checkbox-label">{label}</span>
          {description ? (
            <span id={descriptionId} className="ds-checkbox-description">
              {description}
            </span>
          ) : null}
        </span>
      </label>
    );
  },
);

export type TriStateValue = "unknown" | "true" | "false";

export interface TriStateFieldProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "value" | "onChange"> {
  value: TriStateValue;
  onChange: (value: TriStateValue) => void;
}

export const TriStateField = forwardRef<
  HTMLSelectElement,
  TriStateFieldProps
>(function TriStateField(
  { className = "", id, "aria-describedby": describedBy, value, onChange, ...props },
  ref,
) {
  return (
    <select
      {...props}
      {...useFieldAttributes(id, describedBy, undefined)}
      ref={ref}
      value={value}
      onChange={(event) => onChange(event.target.value as TriStateValue)}
      className={`ds-field-control ${className}`}
    >
      <option value="unknown">Unknown</option>
      <option value="true">Yes</option>
      <option value="false">No</option>
    </select>
  );
});
