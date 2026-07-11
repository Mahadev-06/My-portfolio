import React from 'react'
import FadeIn from '../components/FadeIn'
import { motion } from 'framer-motion'

const ContactSection: React.FC = () => {
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
            <form className="flex flex-col gap-10 mt-8">
              <div className="relative">
                <input type="text" placeholder="Full Name*" className="w-full bg-transparent border-b-2 border-gray-300 pb-3 text-black placeholder-gray-400 text-sm focus:outline-none focus:border-black transition-colors" />
              </div>
              <div className="flex flex-col sm:flex-row gap-10">
                <div className="relative w-full">
                  <input type="email" placeholder="Email*" className="w-full bg-transparent border-b-2 border-gray-300 pb-3 text-black placeholder-gray-400 text-sm focus:outline-none focus:border-black transition-colors" />
                </div>
                <div className="relative w-full">
                  <input type="tel" placeholder="Phone" className="w-full bg-transparent border-b-2 border-gray-300 pb-3 text-black placeholder-gray-400 text-sm focus:outline-none focus:border-black transition-colors" />
                </div>
              </div>
              <div className="relative">
                <input type="text" placeholder="Message" className="w-full bg-transparent border-b-2 border-gray-300 pb-3 text-black placeholder-gray-400 text-sm focus:outline-none focus:border-black transition-colors" />
              </div>
              
              <button type="button" className="mt-8 w-full rounded-full border border-[#7C3AED] text-[#7C3AED] font-bold tracking-[0.2em] uppercase py-4 text-xs hover:bg-[#7C3AED] hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg">
                Send
              </button>
            </form>
          </FadeIn>
        </div>

      </div>
    </section>
  )
}

export default ContactSection
