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
      className={"ds-widget " + className}
    >
      <header className="mb-2 flex items-center justify-between gap-2">
        <h3 className="ds-text m-0 text-sm font-semibold">{title}</h3>
        {actions ? <div className="flex items-center gap-1.5">{actions}</div> : null}
      </header>
      <div>{children}</div>
    </section>
  );
}
