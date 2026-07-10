"use client";

import {
  type KeyboardEvent,
  type ReactNode,
  useId,
  useRef,
} from "react";

export interface TabItem<T extends string = string> {
  value: T;
  label: string;
  badge?: ReactNode;
  disabled?: boolean;
}

export interface TabsProps<T extends string = string> {
  id?: string;
  value: T;
  items: ReadonlyArray<TabItem<T>>;
  onChange: (value: T) => void;
  label: string;
  className?: string;
}

/** Roving-tabindex section navigation. Panels can be composed separately. */
export function Tabs<T extends string>({
  id,
  value,
  items,
  onChange,
  label,
  className = "",
}: TabsProps<T>) {
  const generatedId = useId();
  const tabsetId = id ?? generatedId;
  const refs = useRef<Array<HTMLButtonElement | null>>([]);

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
      return;
    }
    event.preventDefault();
    const enabledIndexes = items
      .map((item, itemIndex) => (!item.disabled ? itemIndex : -1))
      .filter((itemIndex) => itemIndex >= 0);
    if (enabledIndexes.length === 0) {
      return;
    }
    const currentEnabledIndex = enabledIndexes.indexOf(index);
    let targetIndex: number;
    if (event.key === "Home") {
      targetIndex = enabledIndexes[0];
    } else if (event.key === "End") {
      targetIndex = enabledIndexes[enabledIndexes.length - 1];
    } else {
      const direction = event.key === "ArrowRight" ? 1 : -1;
      const next =
        (currentEnabledIndex + direction + enabledIndexes.length) %
        enabledIndexes.length;
      targetIndex = enabledIndexes[next];
    }
    const item = items[targetIndex];
    if (item) {
      onChange(item.value);
      refs.current[targetIndex]?.focus();
    }
  }

  return (
    <div className={`ds-tabs ${className}`} role="tablist" aria-label={label}>
      {items.map((item, index) => {
        const selected = item.value === value;
        return (
          <button
            key={item.value}
            ref={(node) => {
              refs.current[index] = node;
            }}
            id={`${tabsetId}-${item.value}-tab`}
            type="button"
            role="tab"
            aria-selected={selected}
            aria-controls={id ? `${tabsetId}-${item.value}-panel` : undefined}
            tabIndex={selected ? 0 : -1}
            disabled={item.disabled}
            className="ds-tab"
            onClick={() => onChange(item.value)}
            onKeyDown={(event) => handleKeyDown(event, index)}
          >
            <span>{item.label}</span>
            {item.badge ? <span className="ds-tab-badge">{item.badge}</span> : null}
          </button>
        );
      })}
    </div>
  );
}

export function TabPanel({
  value,
  activeValue,
  children,
  tabListId,
  className = "",
}: {
  value: string;
  activeValue: string;
  children: ReactNode;
  tabListId?: string;
  className?: string;
}) {
  if (value !== activeValue) {
    return null;
  }
  return (
    <section
      id={tabListId ? `${tabListId}-${value}-panel` : undefined}
      role="tabpanel"
      aria-labelledby={tabListId ? `${tabListId}-${value}-tab` : undefined}
      className={`ds-tab-panel ${className}`}
    >
      {children}
    </section>
  );
}
