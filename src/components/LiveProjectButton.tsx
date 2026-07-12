import React from 'react'

interface LiveProjectButtonProps {
  href: string
}

const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({ href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="mask-btn-container rounded-full hover:scale-105"
      style={{
        width: 'clamp(110px, 12vw, 160px)',
        height: 'clamp(36px, 3.8vw, 48px)',
        background: '#0C0C0C', // Under layer background is dark
        border: '1px solid #D7E2EA',
      }}
    >
      {/* Under Layer: Visible when above layer is masked out (hover state) */}
      <span 
        className="mask-btn-under text-[#D7E2EA] font-semibold uppercase tracking-widest font-kanit"
        style={{
          fontSize: 'clamp(9px, 0.9vw, 12px)',
        }}
      >
        Live Project
      </span>

      {/* Above Layer: Normal state, animated/masked out on hover */}
      <button
        type="button"
        className="mask-btn-above text-[#0C0C0C] font-semibold uppercase tracking-widest font-kanit rounded-full"
        style={{
          background: '#D7E2EA',
          fontSize: 'clamp(9px, 0.9vw, 12px)',
        }}
      >
        Live Project
      </button>
    </a>
  )
}

export default LiveProjectButton
