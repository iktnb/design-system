import { type ReactNode } from "react";

export const ProjectCardStatus = {
  Active: "active",
  OnHold: "on_hold",
  Done: "done",
} as const;
export type ProjectCardStatus =
  (typeof ProjectCardStatus)[keyof typeof ProjectCardStatus];

export const ProjectCardHealth = {
  Healthy: "healthy",
  MissingNextAction: "missing_next_action",
} as const;
export type ProjectCardHealth =
  (typeof ProjectCardHealth)[keyof typeof ProjectCardHealth];

export const ProjectCardLinkedActionStatus = {
  Active: "active",
  Done: "done",
} as const;
export type ProjectCardLinkedActionStatus =
  (typeof ProjectCardLinkedActionStatus)[keyof typeof ProjectCardLinkedActionStatus];

export interface ProjectCardLinkedAction {
  id: string;
  title: string;
  status: ProjectCardLinkedActionStatus;
  meta?: string;
  actions?: ReactNode;
}

export interface ProjectCardProps {
  title: string;
  status: ProjectCardStatus;
  health: ProjectCardHealth;
  linkedActions: ProjectCardLinkedAction[];
  titleActions?: ReactNode;
  controls?: ReactNode;
  footer?: ReactNode;
  className?: string;
  labels?: {
    statusLabel: string;
    statusMap: Record<ProjectCardStatus, string>;
    missingNextAction: string;
    linkedSection: string;
    noLinkedActions: string;
    noContext: string;
  };
}

export function ProjectCard({
  title,
  status,
  health,
  linkedActions,
  titleActions,
  controls,
  footer,
  className = "",
  labels = {
    statusLabel: "Status",
    statusMap: {
      [ProjectCardStatus.Active]: "Active",
      [ProjectCardStatus.OnHold]: "On hold",
      [ProjectCardStatus.Done]: "Done",
    },
    missingNextAction: "Missing Next Action",
    linkedSection: "Linked Next Actions",
    noLinkedActions: "No linked actions yet.",
    noContext: "No context",
  },
}: ProjectCardProps) {
  return (
    <article
      className={
        "grid gap-3 rounded-2xl border p-4 shadow-[0_0_20px_rgba(56,189,248,0.12)] " +
        (health === ProjectCardHealth.MissingNextAction
          ? "border-amber-400/45 bg-[linear-gradient(180deg,rgba(120,53,15,0.2),rgba(2,6,23,0.96))]"
          : "border-slate-400/30 bg-[linear-gradient(180deg,rgba(15,23,42,0.92),rgba(2,6,23,0.96))]") +
        " " +
        className
      }
    >
      <header className="flex flex-wrap items-start justify-between gap-2">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="m-0 text-base text-slate-100">{title}</h3>
            {health === ProjectCardHealth.MissingNextAction ? (
              <span className="rounded-full border border-amber-300/60 bg-amber-300/20 px-2 py-0.5 text-[11px] font-semibold tracking-[0.02em] text-amber-100">
                {labels.missingNextAction}
              </span>
            ) : null}
          </div>
          <p className="mt-1 mb-0 text-xs text-slate-300">
            {labels.statusLabel}: {labels.statusMap[status]}
          </p>
        </div>
        {titleActions}
      </header>

      {controls}

      <section aria-label={labels.linkedSection}>
        <p className="mt-0 mb-2 text-xs font-semibold tracking-[0.02em] text-slate-300">
          {labels.linkedSection}
        </p>
        {linkedActions.length === 0 ? (
          <div className="rounded-xl border border-slate-400/25 bg-slate-900/60 p-2.5">
            <p className="m-0 text-sm text-slate-300">
              {labels.noLinkedActions}
            </p>
          </div>
        ) : (
          <div className="grid gap-2">
            {linkedActions.map((linkedAction) => (
              <div
                key={linkedAction.id}
                className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-400/25 bg-slate-900/60 p-2.5"
              >
                <div className="min-w-0 flex-1">
                  <p className="m-0 text-sm text-slate-100">
                    {linkedAction.title}
                  </p>
                  <p className="mt-1 mb-0 text-xs text-slate-300">
                    {linkedAction.meta ?? labels.noContext} ·{" "}
                    {linkedAction.status}
                  </p>
                </div>
                {linkedAction.actions}
              </div>
            ))}
          </div>
        )}
      </section>

      {footer}
    </article>
  );
}
