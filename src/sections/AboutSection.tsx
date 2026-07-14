import React, { useRef } from 'react'
import FadeIn from '../components/FadeIn'
import AnimatedText from '../components/AnimatedText'
import Magnet from '../components/Magnet'
import TextReveal from '../components/TextReveal'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const DECORATIVE_SVGS = [
  {
    // Wavy capsule shape (Color: #8A2BE2 / Purple)
    svg: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_10px_20px_rgba(138,43,226,0.25)]">
        <rect x="25" y="0" width="50" height="100" rx="25" fill="#8A2BE2" />
        <rect x="0" y="25" width="100" height="50" rx="25" fill="#8A2BE2" />
      </svg>
    ),
    className: 'w-[40px] sm:w-[120px] md:w-[180px] absolute top-[8%] left-[2%] sm:left-[2%] md:left-[4%] opacity-80 sm:opacity-100 z-0',
    fadeProps: { delay: 0.1, x: -80, y: 0, duration: 0.9 },
    floatClass: 'float-item-1',
  },
  {
    // Crescent slice / Arc shape (Color: #FF10A0 / Pink)
    svg: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_10px_20px_rgba(255,16,160,0.25)]">
        <path d="M100 50 A 50 50 0 1 0 50 100 L 50 50 Z" fill="#FF10A0" />
      </svg>
    ),
    className: 'w-[35px] sm:w-[100px] md:w-[150px] absolute bottom-[8%] left-[4%] sm:left-[6%] md:left-[10%] opacity-80 sm:opacity-100 z-0',
    fadeProps: { delay: 0.25, x: -80, y: 0, duration: 0.9 },
    floatClass: 'float-item-2',
  },
  {
    // Dual crescent moons (Color: #F59E0B / Amber)
    svg: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_10px_20px_rgba(245,158,11,0.25)]">
        <path d="M45 0 A 45 45 0 0 0 45 100 Z" fill="#F59E0B" />
        <path d="M55 0 A 45 45 0 0 1 55 100 Z" fill="#F59E0B" />
      </svg>
    ),
    className: 'w-[40px] sm:w-[120px] md:w-[180px] absolute top-[8%] right-[2%] sm:right-[2%] md:right-[4%] opacity-80 sm:opacity-100 z-0',
    fadeProps: { delay: 0.15, x: 80, y: 0, duration: 0.9 },
    floatClass: 'float-item-3',
  },
  {
    // Four circles grid (Color: #FFFFFF / White)
    svg: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_10px_20px_rgba(255,255,255,0.12)]">
        <circle cx="27" cy="27" r="23" fill="white" />
        <circle cx="73" cy="27" r="23" fill="white" />
        <circle cx="27" cy="73" r="23" fill="white" />
        <circle cx="73" cy="73" r="23" fill="white" />
      </svg>
    ),
    className: 'w-[45px] sm:w-[130px] md:w-[190px] absolute bottom-[8%] right-[4%] sm:right-[6%] md:right-[10%] opacity-80 sm:opacity-100 z-0',
    fadeProps: { delay: 0.3, x: 80, y: 0, duration: 0.9 },
    floatClass: 'float-item-4',
  },
]

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: '+=100%',
      pin: true,
      scrub: true,
      pinSpacing: true,
      invalidateOnRefresh: true,
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} id="about" className="relative h-screen flex items-center justify-center px-5 sm:px-8 md:px-10 py-12 bg-[#0C0C0C] overflow-hidden">
      {/* Decorative SVGs */}
      {DECORATIVE_SVGS.map((item, i) => (
        <FadeIn key={i} {...item.fadeProps} className={item.className}>
          <Magnet padding={120} strength={8}>
            <div className={`w-full h-full ${item.floatClass}`}>
              {item.svg}
            </div>
          </Magnet>
        </FadeIn>
      ))}

      {/* Center content */}
      <div className="flex flex-col items-center max-w-[900px] w-full z-10">
        <div className="flex flex-col items-center gap-6 sm:gap-14 md:gap-16 w-full">
          <TextReveal
            text="About me"
            className="hero-heading"
            style={{ fontSize: 'clamp(2.5rem, 12vw, 160px)' }}
          />

          <AnimatedText
            text="I build modern, scalable web applications that combine clean design with robust functionality. Passionate about full-stack development, I leverage modern technologies and AI-assisted workflows to transform ideas into impactful digital products while continuously learning Python, Artificial Intelligence, and Machine Learning."
            className="text-[#D7E2EA] font-medium text-center leading-relaxed w-full max-w-[340px] sm:max-w-none px-4 sm:px-0"
            style={{ fontSize: 'clamp(0.9rem, 2.2vw, 1.8rem)', lineHeight: 1.4 }}
          />
        </div>
      </div>
    </section>
  )
}

export default AboutSection
