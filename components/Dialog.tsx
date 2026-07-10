"use client";

import {
  type KeyboardEvent,
  type ReactNode,
  type RefObject,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
} from "react";
import { createPortal } from "react-dom";
import { IconButton } from "./Button";

export type DialogSize = "medium" | "large" | "drawer" | "full";

export interface DialogProps {
  open: boolean;
  title: string;
  description?: string;
  onClose: () => void;
  children: ReactNode;
  footer?: ReactNode;
  size?: DialogSize;
  closeLabel?: string;
  allowEscape?: boolean;
  closeOnBackdrop?: boolean;
  initialFocusRef?: RefObject<HTMLElement | null>;
  className?: string;
}

const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
].join(",");

/** Accessible modal dialog/drawer with focus containment and restoration. */
export function Dialog({
  open,
  title,
  description,
  onClose,
  children,
  footer,
  size = "medium",
  closeLabel = "Close dialog",
  allowEscape = true,
  closeOnBackdrop = true,
  initialFocusRef,
  className = "",
}: DialogProps) {
  const titleId = useId();
  const descriptionId = useId();
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    if (!open) {
      return;
    }
    returnFocusRef.current = document.activeElement as HTMLElement | null;
    const target = initialFocusRef?.current ?? closeRef.current;
    target?.focus();
  }, [initialFocusRef, open]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const overlay = overlayRef.current;
    const previousOverflow = document.body.style.overflow;
    const backgroundStates = Array.from(document.body.children)
      .filter((element) => element !== overlay && !element.contains(overlay))
      .map((element) => ({
        element: element as HTMLElement,
        inert: (element as HTMLElement).inert,
        ariaHidden: element.getAttribute("aria-hidden"),
      }));

    document.body.style.overflow = "hidden";
    for (const state of backgroundStates) {
      state.element.inert = true;
      state.element.setAttribute("aria-hidden", "true");
    }

    return () => {
      document.body.style.overflow = previousOverflow;
      for (const state of backgroundStates) {
        state.element.inert = state.inert;
        if (state.ariaHidden === null) {
          state.element.removeAttribute("aria-hidden");
        } else {
          state.element.setAttribute("aria-hidden", state.ariaHidden);
        }
      }
      returnFocusRef.current?.focus();
    };
  }, [open]);

  if (!open || typeof document === "undefined") {
    return null;
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape" && allowEscape) {
      event.preventDefault();
      event.stopPropagation();
      onClose();
      return;
    }
    if (event.key !== "Tab") {
      return;
    }

    const focusable = Array.from(
      panelRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR) ?? [],
    ).filter((element) => !element.hidden && element.offsetParent !== null);
    if (focusable.length === 0) {
      event.preventDefault();
      panelRef.current?.focus();
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  return createPortal(
    <div
      ref={overlayRef}
      className="ds-dialog-overlay"
      onMouseDown={(event) => {
        if (closeOnBackdrop && event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={description ? descriptionId : undefined}
        tabIndex={-1}
        className={`ds-dialog ds-dialog-${size} ${className}`}
        onKeyDown={handleKeyDown}
      >
        <header className="ds-dialog-header">
          <div className="min-w-0">
            <h2 id={titleId} className="ds-dialog-title">
              {title}
            </h2>
            {description ? (
              <p id={descriptionId} className="ds-dialog-description">
                {description}
              </p>
            ) : null}
          </div>
          <IconButton
            ref={closeRef}
            label={closeLabel}
            variant="quiet"
            size="small"
          >
            <span aria-hidden>×</span>
          </IconButton>
        </header>
        <div className="ds-dialog-body">{children}</div>
        {footer ? <footer className="ds-dialog-footer">{footer}</footer> : null}
      </div>
    </div>,
    document.body,
  );
}
