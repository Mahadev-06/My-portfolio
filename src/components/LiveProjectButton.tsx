import React from 'react'

interface LiveProjectButtonProps {
  href: string
}

const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({ href }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      className="rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-semibold uppercase tracking-widest px-5 py-2.5 sm:px-8 sm:py-3 md:px-10 md:py-3.5 text-[10px] sm:text-xs md:text-sm hover:bg-[#D7E2EA]/10 transition-colors duration-200 cursor-pointer inline-flex items-center"
    >
      Live Project
    </a>
  )
}

export default LiveProjectButton
