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
        "grid gap-3 p-4 " +
        (health === ProjectCardHealth.MissingNextAction
          ? "ds-project-card ds-project-card-warning"
          : "ds-project-card") +
        " " +
        className
      }
    >
      <header className="flex flex-wrap items-start justify-between gap-2">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="ds-text m-0 text-base">{title}</h3>
            {health === ProjectCardHealth.MissingNextAction ? (
              <span className="ds-badge-warning px-2 py-0.5 text-[11px] font-semibold tracking-[0.02em]">
                {labels.missingNextAction}
              </span>
            ) : null}
          </div>
          <p className="ds-text-muted mt-1 mb-0 text-xs">
            {labels.statusLabel}: {labels.statusMap[status]}
          </p>
        </div>
        {titleActions}
      </header>

      {controls}

      <section aria-label={labels.linkedSection}>
        <p className="ds-text-muted mt-0 mb-2 text-xs font-semibold tracking-[0.02em]">
          {labels.linkedSection}
        </p>
        {linkedActions.length === 0 ? (
          <div className="ds-inner-panel p-2.5">
            <p className="ds-text-muted m-0 text-sm">
              {labels.noLinkedActions}
            </p>
          </div>
        ) : (
          <div className="grid gap-2">
            {linkedActions.map((linkedAction) => (
              <div
                key={linkedAction.id}
                className="ds-inner-panel flex flex-wrap items-center justify-between gap-2 p-2.5"
              >
                <div className="min-w-0 flex-1">
                  <p className="ds-text m-0 text-sm">
                    {linkedAction.title}
                  </p>
                  <p className="ds-text-muted mt-1 mb-0 text-xs">
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
