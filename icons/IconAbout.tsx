export interface IconAboutProps {
  className?: string
  size?: number
}

export function IconAbout({ className = '', size = 24 }: IconAboutProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="3" />
      <path d="M5 21v-2a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v2" />
      <path d="M12 11v6" opacity="0.8" />
      <path d="M9 14h6" opacity="0.8" />
    </svg>
  )
}
