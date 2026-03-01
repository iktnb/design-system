export interface ReviewStepperStep {
  id: string;
  title: string;
  description?: string;
}

export interface ReviewStepperProps {
  steps: ReviewStepperStep[];
  currentStep: number;
  completedStepIndexes?: number[];
  onStepSelect?: (stepIndex: number) => void;
  className?: string;
  labels?: {
    listAria: string;
    stepAria: (stepIndex: number, title: string) => string;
  };
}

export function ReviewStepper({
  steps,
  currentStep,
  completedStepIndexes = [],
  onStepSelect,
  className = "",
  labels = {
    listAria: "Weekly review steps",
    stepAria: (stepIndex, title) => `Step ${stepIndex + 1}: ${title}`,
  },
}: ReviewStepperProps) {
  const completedSet = new Set(completedStepIndexes);

  return (
    <ol
      className={
        "grid gap-2 rounded-2xl border border-slate-400/25 bg-[linear-gradient(180deg,rgba(17,24,39,0.9),rgba(2,6,23,0.95))] p-3 " +
        className
      }
      aria-label={labels.listAria}
    >
      {steps.map((step, index) => {
        const isCurrent = index === currentStep;
        const isCompleted =
          completedSet.has(index) || (!isCurrent && index < currentStep);
        const isUpcoming = !isCurrent && !isCompleted;

        return (
          <li key={step.id}>
            <button
              className={
                "flex w-full cursor-pointer items-start gap-3 rounded-xl border px-3 py-2 text-left transition-[transform,box-shadow,background-color,border-color] duration-200 ease-in-out hover:-translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/65 " +
                (isCurrent
                  ? "border-sky-400/65 bg-sky-400/12 shadow-[0_0_16px_rgba(56,189,248,0.2)]"
                  : isCompleted
                    ? "border-emerald-400/45 bg-emerald-400/10"
                    : "border-slate-400/30 bg-slate-900/55")
              }
              type="button"
              aria-current={isCurrent ? "step" : undefined}
              aria-label={labels.stepAria(index, step.title)}
              onClick={() => onStepSelect?.(index)}
            >
              <span
                className={
                  "mt-0.5 inline-grid h-6 w-6 shrink-0 place-items-center rounded-full border text-xs font-bold " +
                  (isCurrent
                    ? "border-sky-300/75 text-sky-200"
                    : isCompleted
                      ? "border-emerald-300/75 text-emerald-200"
                      : "border-slate-400/45 text-slate-300")
                }
              >
                {isCompleted ? "✓" : index + 1}
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-slate-100">
                  {step.title}
                </span>
                {step.description ? (
                  <span
                    className={
                      "mt-0.5 hidden text-xs sm:block " +
                      (isUpcoming ? "text-slate-400" : "text-slate-300")
                    }
                  >
                    {step.description}
                  </span>
                ) : null}
              </span>
            </button>
          </li>
        );
      })}
    </ol>
  );
}
