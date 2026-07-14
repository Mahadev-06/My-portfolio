import React, { useRef } from 'react'
import FadeIn from '../components/FadeIn'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const FooterSection: React.FC = () => {
  const container = useRef<HTMLElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()
    mm.add("(min-width: 768px)", () => {
      const shapes = gsap.utils.toArray('.shape')
      shapes.forEach((shape: any) => {
        // pin shape when it reaches the center of the viewport, for 300px
        ScrollTrigger.create({
          trigger: shape,
          pin: true,
          start: "center center",
          end: "+=300"
        })
      })
    })
    return () => mm.revert()
  }, { scope: container })

  return (
    <footer ref={container} className="bg-[#0A0A0A] text-white pt-12 md:pt-24 overflow-hidden relative z-30" style={{ borderTopLeftRadius: '40px', borderTopRightRadius: '40px', marginTop: '-40px' }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pb-12 md:pb-24 flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">
        
        {/* Left Side: MAHADEV PATRO */}
        <div className="w-full md:w-1/2">
          <FadeIn delay={0.1}>
            <h2 
              className="text-6xl sm:text-7xl md:text-7xl lg:text-[6rem] xl:text-[7rem] font-black leading-[0.85] tracking-tight uppercase" 
              style={{ WebkitTextStroke: '2px white', color: 'transparent' }}
            >
              MAHADEV<br/>PATRO
            </h2>
          </FadeIn>
        </div>

        {/* Right Side: Links */}
        <div className="w-full md:w-1/2 flex flex-row justify-start md:justify-end gap-16 sm:gap-24 lg:gap-32 mt-4 md:mt-6">
          <FadeIn delay={0.3} className="flex flex-col gap-4 md:gap-5">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] mb-2 text-white">Social</h4>
            {[
              { label: 'Instagram', url: 'https://instagram.com/__.mahadev.__6' },
              { label: 'GitHub', url: 'https://github.com/Mahadev-06' },
              { label: 'LinkedIn', url: 'https://www.linkedin.com/in/mahadev-patro-a76267377?utm_source=share_via&utm_content=profile&utm_medium=member_android' }
            ].map(social => (
              <a 
                key={social.label} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm font-medium"
              >
                {social.label}
              </a>
            ))}
          </FadeIn>
          
          <FadeIn delay={0.4} className="flex flex-col gap-4 md:gap-5">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] mb-2 text-white">Navigation</h4>
            {[
              { label: 'Home', href: '#home' },
              { label: 'Work', href: '#projects' },
              { label: 'Services', href: '#services' },
              { label: 'About', href: '#about' }
            ].map(link => (
              <a 
                key={link.label} 
                href={link.href} 
                className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </FadeIn>
        </div>
      </div>

      {/* Decorative Bottom Shapes */}
      <div className="w-full flex justify-between items-end px-4 sm:px-8 pb-8 gap-1.5 sm:gap-4 overflow-hidden">
        <Shape delay={0.5} color="white">
          <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full drop-shadow-xl">
            <rect x="25" y="0" width="50" height="100" rx="25" />
            <rect x="0" y="25" width="100" height="50" rx="25" />
          </svg>
        </Shape>
        <Shape delay={0.55} color="#FF10A0">
          <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full drop-shadow-xl">
            <circle cx="27" cy="27" r="23" />
            <circle cx="73" cy="27" r="23" />
            <circle cx="27" cy="73" r="23" />
            <circle cx="73" cy="73" r="23" />
          </svg>
        </Shape>
        <Shape delay={0.6} color="white">
          <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full drop-shadow-xl">
            <path d="M100 50 A 50 50 0 1 0 50 100 L 50 50 Z" />
          </svg>
        </Shape>
        <Shape delay={0.65} color="#8A2BE2">
          <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full drop-shadow-xl">
            <circle cx="50" cy="50" r="50" />
          </svg>
        </Shape>
        <Shape delay={0.7} color="white">
          <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full drop-shadow-xl">
            <polygon points="0,0 75,0 45,50 100,50 100,100 25,100 55,50 0,50" />
          </svg>
        </Shape>
        <Shape delay={0.75} color="#F59E0B">
          <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full drop-shadow-xl">
            <path d="M45 0 A 45 45 0 0 0 45 100 Z" />
            <path d="M55 0 A 45 45 0 0 1 55 100 Z" />
          </svg>
        </Shape>
        <Shape delay={0.8} color="white">
          <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full drop-shadow-xl">
            <polygon points="50,0 100,43 0,43" />
            <polygon points="25,48 75,48 100,100 0,100" />
          </svg>
        </Shape>
        <Shape delay={0.85} color="#FF10A0">
          <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full drop-shadow-xl">
            <path fillRule="evenodd" clipRule="evenodd" d="M50 0 C77.6 0 100 22.4 100 50 C100 77.6 77.6 100 50 100 C22.4 100 0 77.6 0 50 C0 22.4 22.4 0 50 0 Z M50 28 C37.85 28 28 37.85 28 50 C28 62.15 37.85 72 50 72 C62.15 72 72 62.15 72 50 C72 37.85 62.15 28 50 28 Z" />
          </svg>
        </Shape>
      </div>
    </footer>
  )
}

const Shape: React.FC<{ children: React.ReactNode; delay: number; color: string }> = ({ children, delay, color }) => (
  <FadeIn delay={delay} y={40} className="shape w-[9.5vw] md:w-[11vw] max-w-[140px] min-w-[24px] aspect-square flex-shrink-0" style={{ color }}>
    {children}
  </FadeIn>
)

export default FooterSection
