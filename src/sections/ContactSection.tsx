import React, { useState } from 'react'
import FadeIn from '../components/FadeIn'
import { motion } from 'framer-motion'
import TextReveal from '../components/TextReveal'

const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [succeeded, setSucceeded] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  // Form State
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  // Validation Flags
  const isValidName = name.trim().length > 0
  const isValidEmail = email.trim().length > 0
  const isValidPhone = phone.trim().length > 0
  const isValidMessage = message.trim().length > 0

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage(null)

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    try {
      const response = await fetch('https://formspree.io/f/xwvgevpw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSucceeded(true)
      } else {
        const result = await response.json()
        if (result && result.errors) {
          setErrorMessage(result.errors.map((err: any) => err.message).join(', '))
        } else {
          setErrorMessage('Something went wrong. Please try again.')
        }
      }
    } catch (error) {
      setErrorMessage('Failed to connect. Please check your internet connection.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === 'Enter' && (e.target as HTMLElement).tagName !== 'TEXTAREA') {
      e.preventDefault()
    }
  }

  return (
    <section id="contact" className="relative bg-[#F4F4F5] pt-16 pb-24 px-6 md:pt-28 md:pb-40 md:px-16 overflow-hidden z-20 rounded-t-[40px] -mt-10 transform-gpu">
      
      {/* 3D Balloon CSS Art Placeholder - Left edge */}
      <motion.div 
        animate={{ y: [0, 20, 0] }} 
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-5%] md:left-[2%] top-[35%] md:top-[30%] z-0 scale-[0.55] md:scale-100 origin-left pointer-events-none opacity-60 md:opacity-100 will-change-transform transform-gpu"
      >
        <div className="relative w-[150px] h-[250px] filter drop-shadow-[0_15px_15px_rgba(138,43,226,0.15)]">
          <div className="absolute top-10 left-10 w-20 h-32 bg-[#8A2BE2] rounded-[100px] shadow-inner rotate-45" style={{ background: 'radial-gradient(circle at 30% 30%, #E9D5FF, #9333EA, #4C1D95)' }}></div>
          <div className="absolute top-24 left-0 w-24 h-40 bg-[#8A2BE2] rounded-[100px] shadow-inner -rotate-12" style={{ background: 'radial-gradient(circle at 30% 30%, #E9D5FF, #9333EA, #4C1D95)' }}></div>
          <div className="absolute top-20 left-20 w-16 h-28 bg-[#8A2BE2] rounded-[100px] shadow-inner rotate-45" style={{ background: 'radial-gradient(circle at 30% 30%, #E9D5FF, #9333EA, #4C1D95)' }}></div>
          <div className="absolute top-40 left-10 w-20 h-20 bg-[#8A2BE2] rounded-full shadow-inner rotate-12" style={{ background: 'radial-gradient(circle at 30% 30%, #E9D5FF, #9333EA, #4C1D95)' }}></div>
        </div>
      </motion.div>

      {/* 3D Thunderbolt SVG Placeholder - Right edge */}
      <motion.div 
        animate={{ y: [0, -15, 0], rotate: [12, 16, 12] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-5%] md:right-[-2%] top-[8%] md:top-[10%] z-0 scale-[0.5] md:scale-100 origin-right pointer-events-none opacity-60 md:opacity-100 will-change-transform transform-gpu"
      >
        <svg viewBox="0 0 24 24" className="w-[150px] h-[150px] md:w-[220px] md:h-[220px] filter drop-shadow-[0_15px_15px_rgba(245,158,11,0.15)] opacity-90">
          <defs>
            <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FEF08A" />
              <stop offset="30%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#92400E" />
            </linearGradient>
          </defs>
          <path fill="url(#gold)" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      </motion.div>

      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-16 relative z-10">
        
        {/* Left Side */}
        <div className="w-full md:w-1/2 flex flex-col items-start pt-8 md:pl-16">
          <FadeIn delay={0.1}>
            <div className="text-black font-black text-6xl sm:text-7xl md:text-[6.5rem] leading-[0.85] tracking-normal uppercase mb-8">
              <TextReveal text="Let's" className="text-left text-black" style={{ fontSize: 'inherit', lineHeight: 'inherit' }} />
              <TextReveal text="Get In" className="text-left text-black" style={{ fontSize: 'inherit', lineHeight: 'inherit' }} />
              <TextReveal text="Touch" className="text-left text-black" style={{ fontSize: 'inherit', lineHeight: 'inherit' }} />
            </div>
            <a href="mailto:patromahadev544@gmail.com" className="text-black text-xl md:text-2xl font-bold underline decoration-4 underline-offset-8 decoration-black hover:text-[#8A2BE2] hover:decoration-[#8A2BE2] transition-colors">
              patromahadev544@gmail.com
            </a>
          </FadeIn>
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-[45%]">
          <FadeIn delay={0.3} className="w-full bg-transparent">
            {succeeded ? (
              <div className="mt-8 p-8 rounded-3xl border border-[#7C3AED]/20 bg-white/50 backdrop-blur-md flex flex-col items-center justify-center text-center gap-4 shadow-lg min-h-[320px]">
                <div className="w-16 h-16 rounded-full bg-[#7C3AED]/15 flex items-center justify-center text-3xl">
                  ✨
                </div>
                <h3 className="text-2xl font-black uppercase text-black font-kanit">
                  Message Sent!
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                  Thanks for reaching out, Mahadev will get back to you shortly!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} onKeyDown={handleKeyDown} noValidate autoComplete="off" className="flex flex-col gap-8 mt-8">
                {/* Your Name */}
                <div className="flex flex-col gap-2 relative w-full">
                  <label className="text-xs font-bold uppercase tracking-wider text-black/60 pl-1">
                    Your Name
                  </label>
                  <div className="relative w-full">
                    <input 
                      required
                      type="text" 
                      id="name"
                      name="name" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Full Name*" 
                      className={`w-full bg-white/90 sm:bg-white/50 sm:backdrop-blur-sm border rounded-2xl py-4 pl-5 pr-12 text-black placeholder-black/40 text-base focus:outline-none transition-all ${isValidName ? 'border-green-500 focus:border-green-500 bg-green-500/[0.02]' : 'border-black/15 focus:border-black'}`} 
                    />
                    {isValidName && (
                      <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  {isValidName && (
                    <span className="text-xs text-green-600 font-medium pl-1 validation-message">
                      Perfect, thank you
                    </span>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-8">
                  {/* Email */}
                  <div className="flex flex-col gap-2 relative w-full">
                    <label className="text-xs font-bold uppercase tracking-wider text-black/60 pl-1">
                      Email Address
                    </label>
                    <div className="relative w-full">
                      <input 
                        required
                        type="email" 
                        id="email"
                        name="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email*" 
                        className={`w-full bg-white/90 sm:bg-white/50 sm:backdrop-blur-sm border rounded-2xl py-4 pl-5 pr-12 text-black placeholder-black/40 text-base focus:outline-none transition-all ${isValidEmail ? 'border-green-500 focus:border-green-500 bg-green-500/[0.02]' : 'border-black/15 focus:border-black'}`} 
                      />
                      {isValidEmail && (
                        <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    {isValidEmail && (
                      <span className="text-xs text-green-600 font-medium pl-1 validation-message">
                        We'll reach out to you soon
                      </span>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-2 relative w-full">
                    <label className="text-xs font-bold uppercase tracking-wider text-black/60 pl-1">
                      Phone Number
                    </label>
                    <div className="relative w-full">
                      <input 
                        type="tel" 
                        id="phone"
                        name="phone" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Phone (Optional)" 
                        className={`w-full bg-white/90 sm:bg-white/50 sm:backdrop-blur-sm border rounded-2xl py-4 pl-5 pr-12 text-black placeholder-black/40 text-base focus:outline-none transition-all ${isValidPhone ? 'border-green-500 focus:border-green-500 bg-green-500/[0.02]' : 'border-black/15 focus:border-black'}`} 
                      />
                      {isValidPhone && (
                        <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    {isValidPhone && (
                      <span className="text-xs text-green-600 font-medium pl-1 validation-message">
                        We'll reach out to you soon
                      </span>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2 relative w-full">
                  <label className="text-xs font-bold uppercase tracking-wider text-black/60 pl-1">
                    Tell us about your project
                  </label>
                  <div className="relative w-full">
                    <textarea 
                      required
                      id="message"
                      name="message" 
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Message*" 
                      className={`w-full bg-white/90 sm:bg-white/50 sm:backdrop-blur-sm border rounded-2xl py-4 pl-5 pr-12 text-black placeholder-black/40 text-base focus:outline-none transition-all resize-none ${isValidMessage ? 'border-green-500 focus:border-green-500 bg-green-500/[0.02]' : 'border-black/15 focus:border-black'}`} 
                    />
                    {isValidMessage && (
                      <svg className="absolute right-4 top-6 w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  {isValidMessage && (
                    <span className="text-xs text-green-600 font-medium pl-1 validation-message">
                      Thank you for sharing
                    </span>
                  )}
                </div>
                
                {errorMessage && (
                  <div className="text-red-500 text-sm -mt-4">
                    {errorMessage}
                  </div>
                )}

                <div className={`mt-4 mask-button-container ${isSubmitting ? 'disabled' : ''}`.trim()}>
                  <span className="mas">{isSubmitting ? 'Sending...' : 'Send'}</span>
                  <div className="visual-button">{isSubmitting ? 'Sending...' : 'Send'}</div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="real-submit-button"
                  >
                    {isSubmitting ? 'Sending...' : 'Send'}
                  </button>
                </div>
              </form>
            )}
          </FadeIn>
        </div>

      </div>
    </section>
  )
}

export default ContactSection
