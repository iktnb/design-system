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
        className="-rotate-90 absolute inset-0 h-full w-full drop-shadow-[0_0_10px_rgba(56,189,248,0.9)]"
        viewBox="0 0 48 48"
        aria-hidden
      >
        <circle
          cx="24"
          cy="24"
          r="20"
          fill="none"
          stroke="rgba(56,189,248,0.28)"
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
          className="text-accent-cyan transition-[stroke-dashoffset] duration-100 ease-out"
          strokeDasharray={RING_CIRCUMFERENCE}
          strokeDashoffset={RING_CIRCUMFERENCE * (1 - safeProgress)}
        />
      </svg>

      <button
        type="button"
        onClick={onClick}
        className="neon-glow-cyan absolute inset-[4px] flex items-center justify-center rounded-full border border-accent-cyan/70 bg-accent-cyan/20 text-accent-cyan shadow-[0_0_14px_rgba(56,189,248,0.55),inset_0_0_8px_rgba(56,189,248,0.2)] transition hover:scale-110 hover:border-accent-cyan hover:bg-accent-cyan/30 focus:outline-none focus:ring-2 focus:ring-accent-cyan/40 focus:ring-offset-2 focus:ring-offset-[var(--color-card)]"
        aria-label={ariaLabel}
      >
        {children}
      </button>
    </div>
  );
}
