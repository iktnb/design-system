import { type ReactNode } from 'react'

export interface CardProps {
  children: ReactNode
  className?: string
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={
        'rounded-xl border border-white/5 bg-card backdrop-blur-sm shadow-lg transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-gray-600/40 hover:shadow-xl ' +
        className
      }
    >
      {children}
    </div>
  )
}
