import { type ReactNode } from "react";

export interface GlowButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "cyan" | "violet";
  external?: boolean;
  className?: string;
}

export function GlowButton({
  children,
  href,
  onClick,
  variant = "cyan",
  external = false,
  className = "",
}: GlowButtonProps) {
  const base =
    "ds-button group px-5 py-3 focus:outline-none sm:min-w-0 sm:px-6";
  const cyan = "ds-button-primary";
  const violet = "ds-button-secondary";

  const styles = `${base} ${variant === "cyan" ? cyan : violet} ${className}`;

  const shimmerCyan =
    "ds-button-shimmer";
  const shimmerViolet =
    "ds-button-shimmer";

  const content = (
    <>
      <span
        className={variant === "cyan" ? shimmerCyan : shimmerViolet}
        aria-hidden
      />
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={styles}
        {...(external && {
          target: "_blank",
          rel: "noopener noreferrer",
        })}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={styles}>
      {content}
    </button>
  );
}
