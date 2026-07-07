import { type ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={"ds-card backdrop-blur-sm " + className}
    >
      {children}
    </div>
  );
}
