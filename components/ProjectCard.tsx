import { type ReactNode } from 'react'

export type ProjectCardStatus = 'active' | 'on_hold' | 'done'
export type ProjectCardHealth = 'healthy' | 'missing_next_action'

export interface ProjectCardLinkedAction {
  id: string
  title: string
  status: 'active' | 'done'
  meta?: string
  actions?: ReactNode
}

export interface ProjectCardProps {
  title: string
  status: ProjectCardStatus
  health: ProjectCardHealth
  linkedActions: ProjectCardLinkedAction[]
  titleActions?: ReactNode
  controls?: ReactNode
  footer?: ReactNode
  className?: string
}

const STATUS_LABEL: Record<ProjectCardStatus, string> = {
  active: 'Active',
  on_hold: 'On hold',
  done: 'Done',
}

export function ProjectCard({
  title,
  status,
  health,
  linkedActions,
  titleActions,
  controls,
  footer,
  className = '',
}: ProjectCardProps) {
  return (
    <article
      className={
        'grid gap-3 rounded-2xl border p-4 shadow-[0_0_20px_rgba(56,189,248,0.12)] ' +
        (health === 'missing_next_action'
          ? 'border-amber-400/45 bg-[linear-gradient(180deg,rgba(120,53,15,0.2),rgba(2,6,23,0.96))]'
          : 'border-slate-400/30 bg-[linear-gradient(180deg,rgba(15,23,42,0.92),rgba(2,6,23,0.96))]') +
        ' ' +
        className
      }
    >
      <header className="flex flex-wrap items-start justify-between gap-2">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="m-0 text-base text-slate-100">{title}</h3>
            {health === 'missing_next_action' ? (
              <span className="rounded-full border border-amber-300/60 bg-amber-300/20 px-2 py-0.5 text-[11px] font-semibold tracking-[0.02em] text-amber-100">
                Missing Next Action
              </span>
            ) : null}
          </div>
          <p className="mt-1 mb-0 text-xs text-slate-300">Status: {STATUS_LABEL[status]}</p>
        </div>
        {titleActions}
      </header>

      {controls}

      <section aria-label="Linked Next Actions">
        <p className="mt-0 mb-2 text-xs font-semibold tracking-[0.02em] text-slate-300">
          Linked Next Actions
        </p>
        {linkedActions.length === 0 ? (
          <div className="rounded-xl border border-slate-400/25 bg-slate-900/60 p-2.5">
            <p className="m-0 text-sm text-slate-300">No linked actions yet.</p>
          </div>
        ) : (
          <div className="grid gap-2">
            {linkedActions.map((linkedAction) => (
              <div
                key={linkedAction.id}
                className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-400/25 bg-slate-900/60 p-2.5"
              >
                <div className="min-w-0 flex-1">
                  <p className="m-0 text-sm text-slate-100">{linkedAction.title}</p>
                  <p className="mt-1 mb-0 text-xs text-slate-300">
                    {linkedAction.meta ?? 'No context'} · {linkedAction.status}
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
  )
}
