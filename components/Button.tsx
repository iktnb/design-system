import {
  forwardRef,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";

export type ButtonVariant = "primary" | "secondary" | "quiet" | "destructive";
export type ButtonSize = "small" | "medium";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  children: ReactNode;
}

/** Semantic action button shared across the supported Ecom themes. */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = "primary",
    size = "medium",
    loading = false,
    disabled,
    className = "",
    children,
    type = "button",
    ...props
  },
  ref,
) {
  return (
    <button
      {...props}
      ref={ref}
      type={type}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={`ds-button ds-button-${variant} ds-button-${size} ${className}`}
    >
      {loading ? <span className="ds-button-spinner" aria-hidden /> : null}
      <span className="ds-button-content">{children}</span>
    </button>
  );
});

export interface IconButtonProps
  extends Omit<ButtonProps, "children" | "aria-label"> {
  label: string;
  children: ReactNode;
}

/** Icon-only button with a required accessible name. */
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton({ label, className = "", children, ...props }, ref) {
    return (
      <Button
        {...props}
        ref={ref}
        aria-label={label}
        className={`ds-icon-button ${className}`}
      >
        {children}
      </Button>
    );
  },
);
