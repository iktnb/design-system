import { type ReactNode } from "react";

export interface NeonProgressButtonProps {
  progress: number;
  onClick: () => void;
  ariaLabel: string;
  children: ReactNode;
  className?: string;
}

const RING_CIRCUMFERENCE = 125.66;

function clampProgress(progress: number) {
  if (Number.isNaN(progress)) return 0;
  return Math.max(0, Math.min(progress, 1));
}

export function NeonProgressButton({
  progress,
  onClick,
  ariaLabel,
  children,
  className = "",
}: NeonProgressButtonProps) {
  const safeProgress = clampProgress(progress);

  return (
    <div className={`relative h-12 w-12 ${className}`}>
      <svg
        className="ds-progress-ring absolute inset-0 h-full w-full -rotate-90"
        viewBox="0 0 48 48"
        aria-hidden
      >
        <circle
          cx="24"
          cy="24"
          r="20"
          fill="none"
          stroke="rgba(var(--ds-color-primary-rgb), 0.28)"
          strokeWidth="2.5"
        />
        <circle
          cx="24"
          cy="24"
          r="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="transition-[stroke-dashoffset] duration-100 ease-out"
          strokeDasharray={RING_CIRCUMFERENCE}
          strokeDashoffset={RING_CIRCUMFERENCE * (1 - safeProgress)}
        />
      </svg>

      <button
        type="button"
        onClick={onClick}
        className="ds-progress-button absolute inset-[4px] flex items-center justify-center rounded-full focus:outline-none"
        aria-label={ariaLabel}
      >
        {children}
      </button>
    </div>
  );
}
