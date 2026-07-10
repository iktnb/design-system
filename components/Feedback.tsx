import type { ReactNode } from "react";
import { Button } from "./Button";

export type FeedbackTone = "info" | "success" | "warning" | "danger";

export function Alert({
  title,
  children,
  tone = "info",
  action,
}: {
  title: string;
  children?: ReactNode;
  tone?: FeedbackTone;
  action?: ReactNode;
}) {
  return (
    <div
      className={`ds-alert ds-alert-${tone}`}
      role={tone === "danger" ? "alert" : "status"}
    >
      <div className="min-w-0">
        <strong className="ds-alert-title">{title}</strong>
        {children ? <div className="ds-alert-copy">{children}</div> : null}
      </div>
      {action ? <div className="ds-alert-action">{action}</div> : null}
    </div>
  );
}

export function InlineError({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <p id={id} className="ds-inline-error">
      {children}
    </p>
  );
}

export function Skeleton({
  className = "",
  label = "Loading",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <span className={`ds-skeleton ${className}`} aria-label={label} role="status">
      <span className="sr-only">{label}</span>
    </span>
  );
}

export function EmptyState({
  title,
  description,
  action,
}: {
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <div className="ds-empty-state">
      <span className="ds-empty-marker" aria-hidden />
      <h3>{title}</h3>
      <p>{description}</p>
      {action ? <div>{action}</div> : null}
    </div>
  );
}

export function Toast({
  title,
  description,
  tone = "success",
  actionLabel,
  onAction,
  onDismiss,
}: {
  title: string;
  description?: string;
  tone?: FeedbackTone;
  actionLabel?: string;
  onAction?: () => void;
  onDismiss?: () => void;
}) {
  return (
    <div
      className={`ds-toast ds-alert-${tone}`}
      role={tone === "danger" ? "alert" : "status"}
      aria-live={tone === "danger" ? "assertive" : "polite"}
    >
      <div className="min-w-0">
        <strong>{title}</strong>
        {description ? <p>{description}</p> : null}
      </div>
      <div className="ds-toast-actions">
        {actionLabel && onAction ? (
          <Button variant="secondary" size="small" onClick={onAction}>
            {actionLabel}
          </Button>
        ) : null}
        {onDismiss ? (
          <Button variant="quiet" size="small" onClick={onDismiss}>
            Dismiss
          </Button>
        ) : null}
      </div>
    </div>
  );
}
