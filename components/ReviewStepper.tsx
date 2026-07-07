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
      className={"ds-stepper grid gap-2 p-3 " + className}
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
                "ds-step-button flex w-full cursor-pointer items-start gap-3 px-3 py-2 text-left focus:outline-none " +
                (isCurrent
                  ? "ds-step-button-current"
                  : isCompleted
                    ? "ds-step-button-completed"
                    : "")
              }
              type="button"
              aria-current={isCurrent ? "step" : undefined}
              aria-label={labels.stepAria(index, step.title)}
              onClick={() => onStepSelect?.(index)}
            >
              <span
                className={
                  "ds-step-marker mt-0.5 inline-grid h-6 w-6 shrink-0 place-items-center text-xs font-bold " +
                  (isCurrent
                    ? "text-[var(--ds-color-primary)]"
                    : isCompleted
                      ? "text-[var(--ds-color-success)]"
                      : "ds-text-muted")
                }
              >
                {isCompleted ? "✓" : index + 1}
              </span>
              <span className="min-w-0">
                <span className="ds-text block text-sm font-semibold">
                  {step.title}
                </span>
                {step.description ? (
                  <span
                    className={
                      "mt-0.5 hidden text-xs sm:block " +
                      (isUpcoming ? "ds-text-muted" : "ds-text-soft")
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
