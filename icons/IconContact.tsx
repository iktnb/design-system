export interface IconContactProps {
  className?: string
  size?: number
}

export function IconContact({ className = '', size = 24 }: IconContactProps) {
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
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path d="M8 10h.01" opacity="0.8" />
      <path d="M12 10h.01" opacity="0.8" />
      <path d="M16 10h.01" opacity="0.8" />
    </svg>
  )
}
