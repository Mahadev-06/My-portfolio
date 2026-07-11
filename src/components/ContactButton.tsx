import React from 'react'

const ContactButton: React.FC = () => {
  return (
    <button
      className="relative overflow-hidden rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base text-white font-bold uppercase tracking-widest cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(182,0,168,0.6)] group"
      style={{
        background: 'linear-gradient(90deg, #18011F, #B600A8, #7621B0, #BE4C00, #B600A8, #18011F)',
        backgroundSize: '200% 100%',
        boxShadow: '4px 4px 12px #7721B1 inset',
        outline: '1px solid rgba(255,255,255,0.3)',
        outlineOffset: '-2px',
      }}
    >
      <span className="relative z-10 transition-transform duration-300 group-hover:scale-110 block">
        CONTACT ME
      </span>
      {/* Animated gradient overlay on hover */}
      <div 
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'linear-gradient(90deg, #18011F, #B600A8, #7621B0, #BE4C00, #B600A8, #18011F)',
          backgroundSize: '200% 100%',
          animation: 'gradientMove 2s linear infinite',
        }}
      />
    </button>
  )
}

export default ContactButton
