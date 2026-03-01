import { type ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

export interface SectionRevealProps {
  children: ReactNode
  className?: string
}

export function SectionReveal({ children, className = '' }: SectionRevealProps) {
  const { ref, inView } = useInView()

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`transition-all duration-700 ease-out ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} ${className}`}
    >
      {children}
    </div>
  )
}
