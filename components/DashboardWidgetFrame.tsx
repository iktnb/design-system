import type { ReactNode } from "react";

export interface DashboardWidgetFrameProps {
  title: string;
  children: ReactNode;
  className?: string;
  actions?: ReactNode;
}

export function DashboardWidgetFrame({
  title,
  children,
  className = "",
  actions,
}: DashboardWidgetFrameProps) {
  return (
    <section
      className={
        "rounded-2xl border border-slate-500/35 bg-slate-950/35 p-3 shadow-[0_12px_28px_rgba(2,6,23,0.35)] " +
        className
      }
    >
      <header className="mb-2 flex items-center justify-between gap-2">
        <h3 className="m-0 text-sm font-semibold text-slate-100">{title}</h3>
        {actions ? <div className="flex items-center gap-1.5">{actions}</div> : null}
      </header>
      <div>{children}</div>
    </section>
  );
}
