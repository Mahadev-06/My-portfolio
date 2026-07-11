import React, { useState } from 'react'
import FadeIn from '../components/FadeIn'
import { motion } from 'framer-motion'

const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [succeeded, setSucceeded] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

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

  return (
    <section id="contact" className="relative bg-[#F4F4F5] pt-28 pb-40 px-6 md:px-16 overflow-hidden z-20 rounded-t-[40px] -mt-10">
      
      {/* 3D Balloon CSS Art Placeholder - Left edge */}
      <motion.div 
        animate={{ y: [0, 20, 0] }} 
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-2%] md:left-[2%] top-[30%] hidden md:block z-20"
      >
        <div className="relative w-[150px] h-[250px] drop-shadow-2xl">
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
        className="absolute right-[-2%] top-[10%] hidden md:block"
      >
        <svg viewBox="0 0 24 24" className="w-[150px] h-[150px] md:w-[220px] md:h-[220px] drop-shadow-2xl opacity-90">
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
            <h2 className="text-black font-black text-6xl sm:text-7xl md:text-[6.5rem] leading-[0.85] tracking-tighter uppercase mb-8">
              Let's<br/>Get In<br/>Touch
            </h2>
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
              <form onSubmit={handleSubmit} className="flex flex-col gap-10 mt-8">
                <div className="relative">
                  <input 
                    required
                    type="text" 
                    id="name"
                    name="name" 
                    placeholder="Full Name*" 
                    className="w-full bg-transparent border-b-2 border-gray-300 pb-3 text-black placeholder-gray-400 text-sm focus:outline-none focus:border-black transition-colors" 
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-10">
                  <div className="relative w-full">
                    <input 
                      required
                      type="email" 
                      id="email"
                      name="email" 
                      placeholder="Email*" 
                      className="w-full bg-transparent border-b-2 border-gray-300 pb-3 text-black placeholder-gray-400 text-sm focus:outline-none focus:border-black transition-colors" 
                    />
                  </div>
                  <div className="relative w-full">
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone" 
                      placeholder="Phone" 
                      className="w-full bg-transparent border-b-2 border-gray-300 pb-3 text-black placeholder-gray-400 text-sm focus:outline-none focus:border-black transition-colors" 
                    />
                  </div>
                </div>
                <div className="relative">
                  <input 
                    required
                    type="text" 
                    id="message"
                    name="message" 
                    placeholder="Message*" 
                    className="w-full bg-transparent border-b-2 border-gray-300 pb-3 text-black placeholder-gray-400 text-sm focus:outline-none focus:border-black transition-colors" 
                  />
                </div>
                
                {errorMessage && (
                  <div className="text-red-500 text-sm -mt-6">
                    {errorMessage}
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="mt-8 w-full rounded-full border border-[#7C3AED] text-[#7C3AED] font-bold tracking-[0.2em] uppercase py-4 text-xs hover:bg-[#7C3AED] hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send'}
                </button>
              </form>
            )}
          </FadeIn>
        </div>

      </div>
    </section>
  )
}

export default ContactSection
