"use client";

import { Button } from "./Button";

export interface PaginationProps {
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
  label?: string;
  className?: string;
}

function getVisiblePages(page: number, pageCount: number) {
  const pages = new Set([1, pageCount, page - 1, page, page + 1]);
  return Array.from(pages)
    .filter((value) => value >= 1 && value <= pageCount)
    .sort((a, b) => a - b);
}

/** Compact, keyboard-friendly pagination with an explicit current page. */
export function Pagination({
  page,
  pageCount,
  onPageChange,
  label = "Pagination",
  className = "",
}: PaginationProps) {
  if (pageCount <= 1) {
    return null;
  }

  const visiblePages = getVisiblePages(page, pageCount);

  return (
    <nav className={`ds-pagination ${className}`} aria-label={label}>
      <Button
        variant="quiet"
        size="small"
        disabled={page <= 1}
        onClick={() => onPageChange(page - 1)}
      >
        Previous
      </Button>
      <ol className="ds-pagination-list">
        {visiblePages.map((visiblePage, index) => {
          const previous = visiblePages[index - 1];
          const hasGap = previous !== undefined && visiblePage - previous > 1;
          return (
            <li key={visiblePage} className="ds-pagination-item">
              {hasGap ? (
                <span className="ds-pagination-gap" aria-hidden>
                  …
                </span>
              ) : null}
              <button
                type="button"
                className="ds-pagination-page"
                aria-current={visiblePage === page ? "page" : undefined}
                aria-label={`Page ${visiblePage}`}
                onClick={() => onPageChange(visiblePage)}
              >
                {visiblePage}
              </button>
            </li>
          );
        })}
      </ol>
      <Button
        variant="quiet"
        size="small"
        disabled={page >= pageCount}
        onClick={() => onPageChange(page + 1)}
      >
        Next
      </Button>
    </nav>
  );
}
