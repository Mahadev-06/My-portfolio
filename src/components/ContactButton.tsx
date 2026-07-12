import React from 'react'

const ContactButton: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div
      onClick={scrollToContact}
      className="mask-btn-container rounded-full hover:scale-105 hover:shadow-[0_0_25px_rgba(182,0,168,0.5)]"
      style={{
        width: 'clamp(140px, 15vw, 220px)',
        height: 'clamp(44px, 4.5vw, 62px)',
        background: '#FFFFFF', // Under layer background is white
      }}
    >
      {/* Under Layer: Visible when above layer is masked out (hover state) */}
      <span 
        className="mask-btn-under text-[#0C0C0C] font-bold uppercase tracking-widest font-kanit"
        style={{
          fontSize: 'clamp(11px, 1.1vw, 15px)',
        }}
      >
        CONTACT ME
      </span>

      {/* Above Layer: Normal state, animated/masked out on hover */}
      <button
        type="button"
        className="mask-btn-above text-white font-bold uppercase tracking-widest font-kanit rounded-full"
        style={{
          background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
          boxShadow: '4px 4px 12px #7721B1 inset',
          outline: '1px solid rgba(255,255,255,0.3)',
          outlineOffset: '-3px',
          fontSize: 'clamp(11px, 1.1vw, 15px)',
        }}
      >
        CONTACT ME
      </button>
    </div>
  )
}

export default ContactButton
