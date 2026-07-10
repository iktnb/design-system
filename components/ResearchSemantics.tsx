import type { ReactNode } from "react";

const DEFAULT_REFERENCE_TIME = Date.now();

export type SemanticTone =
  | "unknown"
  | "negative"
  | "partial"
  | "positive"
  | "stale"
  | "info";

export interface SemanticBadgeProps {
  tone: SemanticTone;
  children: ReactNode;
  className?: string;
}

export function SemanticBadge({
  tone,
  children,
  className = "",
}: SemanticBadgeProps) {
  return (
    <span className={`ds-semantic-badge ds-tone-${tone} ${className}`}>
      <span className="ds-semantic-dot" aria-hidden />
      {children}
    </span>
  );
}

const statusLabels: Record<string, string> = {
  draft: "Draft",
  researching: "Researching",
  ready: "Ready",
  rejected: "Rejected",
  archived: "Archived",
};

const statusTones: Record<string, SemanticTone> = {
  draft: "unknown",
  researching: "info",
  ready: "positive",
  rejected: "negative",
  archived: "stale",
};

export function StatusBadge({
  status,
  label,
}: {
  status: string;
  label?: string;
}) {
  return (
    <SemanticBadge tone={statusTones[status] ?? "unknown"}>
      {label ?? statusLabels[status] ?? status}
    </SemanticBadge>
  );
}

export function ScoreBadge({
  points,
  total = 5,
  checked = true,
}: {
  points: number | null;
  total?: number;
  checked?: boolean;
}) {
  const tone: SemanticTone =
    points === null || !checked
      ? "unknown"
      : points <= 0
        ? "negative"
        : points >= 3
          ? "positive"
          : "partial";
  const label = points === null || !checked ? "Unknown" : points.toFixed(2);

  return (
    <span className={`ds-score-badge ds-tone-${tone}`}>
      <strong>{label}</strong>
      <span aria-hidden>/{total}</span>
      <span className="sr-only">
        {points === null || !checked
          ? "Score is unknown"
          : `${label} out of ${total}, checked`}
      </span>
    </span>
  );
}

export interface SignalBreakdownItem {
  label: string;
  value: string;
  tone: SemanticTone;
  description?: string;
}

export function SignalBreakdown({
  items,
  label = "Signal breakdown",
}: {
  items: ReadonlyArray<SignalBreakdownItem>;
  label?: string;
}) {
  return (
    <dl className="ds-signal-breakdown" aria-label={label}>
      {items.map((item) => (
        <div className={`ds-signal-row ds-tone-${item.tone}`} key={item.label}>
          <dt>
            <span className="ds-semantic-dot" aria-hidden />
            <span>{item.label}</span>
            {item.description ? (
              <small className="ds-signal-description">{item.description}</small>
            ) : null}
          </dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export interface PricingSummaryItem {
  label: string;
  value: string;
  emphasis?: "default" | "positive" | "negative";
}

export function PricingSummary({
  items,
  label = "Pricing summary",
}: {
  items: ReadonlyArray<PricingSummaryItem>;
  label?: string;
}) {
  return (
    <dl className="ds-pricing-summary" aria-label={label}>
      {items.map((item) => (
        <div className={`ds-pricing-row ds-pricing-${item.emphasis ?? "default"}`} key={item.label}>
          <dt>{item.label}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function CompletenessMeter({
  known,
  total,
  label = "Evidence checked",
  compact = false,
}: {
  known: number;
  total: number;
  label?: string;
  compact?: boolean;
}) {
  const percentage =
    total > 0 ? Math.min(100, Math.max(0, Math.round((known / total) * 100))) : 0;
  const tone: SemanticTone =
    known <= 0 ? "unknown" : percentage >= 100 ? "positive" : "partial";

  return (
    <div className={`ds-completeness ds-tone-${tone}`}>
      <div className="ds-completeness-label">
        <span>{label}</span>
        <strong>{percentage}%</strong>
      </div>
      <div
        className="ds-completeness-track"
        role="progressbar"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percentage}
        aria-valuetext={`${known.toFixed(2)} of ${total.toFixed(2)} points checked`}
      >
        <span style={{ width: `${percentage}%` }} />
      </div>
      {!compact ? (
        <span className="ds-completeness-copy">
          {known.toFixed(2)} / {total.toFixed(2)} checked
        </span>
      ) : null}
    </div>
  );
}

export function FreshnessBadge({
  updatedAt,
  staleAfterDays = 90,
  referenceTime = DEFAULT_REFERENCE_TIME,
}: {
  updatedAt: string | Date | null;
  staleAfterDays?: number;
  referenceTime?: string | Date | number;
}) {
  if (!updatedAt) {
    return <SemanticBadge tone="unknown">Freshness unknown</SemanticBadge>;
  }
  const date = updatedAt instanceof Date ? updatedAt : new Date(updatedAt);
  const referenceDate =
    referenceTime instanceof Date ? referenceTime : new Date(referenceTime);
  if (Number.isNaN(date.getTime()) || Number.isNaN(referenceDate.getTime())) {
    return <SemanticBadge tone="unknown">Freshness unknown</SemanticBadge>;
  }
  const ageDays = Math.max(
    0,
    Math.floor((referenceDate.getTime() - date.getTime()) / (24 * 60 * 60 * 1000)),
  );
  const stale = ageDays >= staleAfterDays;
  return (
    <SemanticBadge tone={stale ? "stale" : "info"}>
      {stale ? "Stale" : "Updated"} · {ageDays}d
    </SemanticBadge>
  );
}
