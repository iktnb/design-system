import {
  type CSSProperties,
  type KeyboardEvent as ReactKeyboardEvent,
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

export interface NeonSelectOption<T extends string = string> {
  value: T;
  label: string;
  disabled?: boolean;
}

export interface NeonSelectProps<T extends string = string> {
  id?: string;
  ariaLabel?: string;
  value: T;
  options: ReadonlyArray<NeonSelectOption<T>>;
  onChange: (value: T) => void;
  className?: string;
  buttonClassName?: string;
  menuClassName?: string;
  placeholder?: string;
  disabled?: boolean;
}

function getNextEnabledOptionIndex<T extends string>(
  options: ReadonlyArray<NeonSelectOption<T>>,
  startIndex: number,
  direction: 1 | -1,
) {
  if (options.length === 0) {
    return -1;
  }

  let currentIndex = startIndex;
  for (let step = 0; step < options.length; step += 1) {
    currentIndex = (currentIndex + direction + options.length) % options.length;
    if (!options[currentIndex]?.disabled) {
      return currentIndex;
    }
  }

  return -1;
}

export function NeonSelect<T extends string>({
  id,
  ariaLabel,
  value,
  options,
  onChange,
  className = "",
  buttonClassName = "",
  menuClassName = "",
  placeholder,
  disabled = false,
}: NeonSelectProps<T>) {
  const VIEWPORT_MARGIN_PX = 8;
  const MENU_GAP_PX = 6;
  const DEFAULT_MENU_MAX_HEIGHT_PX = 280;
  const MENU_Z_INDEX = 2147483000;

  const generatedId = useId();
  const selectId = id ?? `neon-select-${generatedId}`;
  const listboxId = `${selectId}-listbox`;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listboxRef = useRef<HTMLDivElement>(null);

  const selectedOptionIndex = useMemo(
    () => options.findIndex((option) => option.value === value),
    [options, value],
  );
  const selectedOption =
    selectedOptionIndex >= 0 ? options[selectedOptionIndex] : undefined;

  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(
    selectedOptionIndex >= 0 ? selectedOptionIndex : 0,
  );
  const [menuStyle, setMenuStyle] = useState<CSSProperties | null>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handlePointerDown = (event: MouseEvent) => {
      const targetNode = event.target as Node;
      const isInTrigger = wrapperRef.current?.contains(targetNode);
      const isInListbox = listboxRef.current?.contains(targetNode);
      if (!isInTrigger && !isInListbox) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const updateMenuPosition = useCallback(() => {
    const button = buttonRef.current;
    if (!button) {
      return;
    }

    const rect = button.getBoundingClientRect();
    const availableBelow = window.innerHeight - rect.bottom - VIEWPORT_MARGIN_PX;
    const availableAbove = rect.top - VIEWPORT_MARGIN_PX;
    const shouldOpenAbove =
      availableBelow < DEFAULT_MENU_MAX_HEIGHT_PX && availableAbove > availableBelow;

    const maxHeight = Math.max(
      120,
      (shouldOpenAbove ? availableAbove : availableBelow) - MENU_GAP_PX,
    );

    const width = Math.min(
      rect.width,
      window.innerWidth - VIEWPORT_MARGIN_PX * 2,
    );
    const left = Math.min(
      Math.max(rect.left, VIEWPORT_MARGIN_PX),
      window.innerWidth - width - VIEWPORT_MARGIN_PX,
    );

    setMenuStyle({
      position: "fixed",
      left,
      top: shouldOpenAbove ? rect.top - MENU_GAP_PX : rect.bottom + MENU_GAP_PX,
      width,
      maxHeight,
      transform: shouldOpenAbove ? "translateY(-100%)" : undefined,
      zIndex: MENU_Z_INDEX,
    });
  }, []);

  useLayoutEffect(() => {
    if (!isOpen) {
      return;
    }

    updateMenuPosition();

    const handleWindowChanges = () => {
      updateMenuPosition();
    };

    window.addEventListener("resize", handleWindowChanges);
    window.addEventListener("scroll", handleWindowChanges, true);

    return () => {
      window.removeEventListener("resize", handleWindowChanges);
      window.removeEventListener("scroll", handleWindowChanges, true);
    };
  }, [isOpen, updateMenuPosition]);

  const openAndHighlightSelected = () => {
    if (disabled || options.length === 0) {
      return;
    }
    setIsOpen(true);
    setHighlightedIndex(selectedOptionIndex >= 0 ? selectedOptionIndex : 0);
  };

  const handleKeyDown = (event: ReactKeyboardEvent<HTMLButtonElement>) => {
    if (disabled || options.length === 0) {
      return;
    }

    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
      }
      const direction = event.key === "ArrowDown" ? 1 : -1;
      setHighlightedIndex((previousIndex) =>
        getNextEnabledOptionIndex(options, previousIndex, direction),
      );
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (!isOpen) {
        openAndHighlightSelected();
        return;
      }
      const option = options[highlightedIndex];
      if (option && !option.disabled) {
        onChange(option.value);
        setIsOpen(false);
      }
    }
  };

  const currentLabel = selectedOption?.label ?? placeholder ?? "";

  return (
    <div className={`relative ${className}`} ref={wrapperRef}>
      <button
        id={selectId}
        ref={buttonRef}
        type="button"
        aria-label={ariaLabel}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={listboxId}
        disabled={disabled}
        className={`group flex w-full items-center justify-between gap-2 rounded-[10px] border border-accent-cyan/40 bg-slate-900/80 px-3 py-2 text-left text-sm text-slate-200 shadow-[0_0_22px_rgba(56,189,248,0.16)] transition-all duration-200 hover:border-accent-cyan/75 hover:bg-slate-900/95 hover:shadow-[0_0_26px_rgba(56,189,248,0.28)] focus:outline-none focus:ring-2 focus:ring-accent-cyan/80 focus:ring-offset-2 focus:ring-offset-background disabled:cursor-not-allowed disabled:border-slate-700/60 disabled:text-slate-500 ${buttonClassName}`}
        onClick={() => (isOpen ? setIsOpen(false) : openAndHighlightSelected())}
        onKeyDown={handleKeyDown}
      >
        <span className={selectedOption ? "text-slate-200" : "text-slate-400"}>
          {currentLabel}
        </span>
        <span
          aria-hidden
          className={`text-[10px] text-accent-cyan transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        >
          ▼
        </span>
      </button>

      {isOpen ? (
        createPortal(
          <div
            id={listboxId}
            ref={listboxRef}
            role="listbox"
            aria-labelledby={selectId}
            style={menuStyle ?? undefined}
            className={`overflow-auto rounded-[10px] border border-accent-violet/45 bg-slate-950/95 p-1 shadow-[0_10px_36px_rgba(15,23,42,0.7),0_0_30px_rgba(167,139,250,0.28)] backdrop-blur-sm ${menuClassName}`}
          >
            {options.map((option, index) => {
              const isSelected = option.value === value;
              const isHighlighted = index === highlightedIndex;

              return (
                <button
                  key={option.value}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  disabled={option.disabled}
                  className={`flex w-full items-center justify-between rounded-md px-2.5 py-2 text-sm transition-all duration-150 ${
                    option.disabled
                      ? "cursor-not-allowed text-slate-600"
                      : isHighlighted
                        ? "bg-accent-cyan/15 text-accent-cyan shadow-[0_0_20px_rgba(56,189,248,0.18)]"
                        : isSelected
                          ? "bg-accent-violet/15 text-accent-violet"
                          : "text-slate-200 hover:bg-slate-800/75"
                  }`}
                  onMouseEnter={() => setHighlightedIndex(index)}
                  onClick={() => {
                    if (!option.disabled) {
                      onChange(option.value);
                      setIsOpen(false);
                    }
                  }}
                >
                  <span>{option.label}</span>
                  {isSelected ? (
                    <span className="text-xs text-accent-cyan" aria-hidden>
                      ✓
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>,
          document.body,
        )
      ) : null}
    </div>
  );
}
