import { type ReactNode } from 'react'

export interface GlowButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'cyan' | 'violet'
  external?: boolean
  className?: string
}

export function GlowButton({
  children,
  href,
  onClick,
  variant = 'cyan',
  external = false,
  className = '',
}: GlowButtonProps) {
  const base =
    'group relative inline-flex min-h-[44px] min-w-[44px] items-center justify-center overflow-hidden rounded-md px-5 py-3 font-medium transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background active:scale-[0.98] sm:min-w-0 sm:px-6'
  const cyan =
    'border border-accent-cyan/50 bg-accent-cyan/5 text-accent-cyan hover:border-accent-cyan hover:bg-accent-cyan/15 hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(56,189,248,0.35)] focus:ring-accent-cyan'
  const violet =
    'border border-accent-violet/50 bg-accent-violet/5 text-accent-violet hover:border-accent-violet hover:bg-accent-violet/15 hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(167,139,250,0.35)] focus:ring-accent-violet'

  const styles = `${base} ${variant === 'cyan' ? cyan : violet} ${className}`

  const shimmerCyan =
    'absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-accent-cyan/20 to-transparent transition-transform duration-500 group-hover:translate-x-full'
  const shimmerViolet =
    'absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-accent-violet/20 to-transparent transition-transform duration-500 group-hover:translate-x-full'

  const content = (
    <>
      <span
        className={variant === 'cyan' ? shimmerCyan : shimmerViolet}
        aria-hidden
      />
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        className={styles}
        {...(external && {
          target: '_blank',
          rel: 'noopener noreferrer',
        })}
      >
        {content}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className={styles}>
      {content}
    </button>
  )
}
