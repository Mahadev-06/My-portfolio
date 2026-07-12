import React, { useRef } from 'react'

interface LiveProjectButtonProps {
  href: string
}

const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({ href }) => {
  const linkRef = useRef<HTMLAnchorElement>(null)
  const circleRef = useRef<HTMLDivElement>(null)

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!linkRef.current || !circleRef.current) return
    const rect = linkRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    circleRef.current.style.left = `${x}px`
    circleRef.current.style.top = `${y}px`
  }

  return (
    <a 
      ref={linkRef}
      onMouseEnter={handleMouseEnter}
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="relative overflow-hidden rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] hover:text-[#0C0C0C] font-semibold uppercase tracking-widest px-5 py-2.5 sm:px-8 sm:py-3 md:px-10 md:py-3.5 text-[10px] sm:text-xs md:text-sm transition-colors duration-500 cursor-pointer inline-flex items-center group isolate"
    >
      <span className="relative z-10">
        Live Project
      </span>
      {/* Dynamic Hover circle fill */}
      <div 
        ref={circleRef}
        className="absolute pointer-events-none -translate-x-1/2 -translate-y-1/2 aspect-square w-0 opacity-0 transition-all duration-1000 ease-out z-0 bg-[#D7E2EA] group-hover:w-[250%] group-hover:opacity-100 group-hover:transition-[width_1000ms_ease-out,_opacity_0s]"
      />
    </a>
  )
}

export default LiveProjectButton
