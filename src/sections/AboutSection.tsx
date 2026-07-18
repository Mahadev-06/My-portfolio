import React, { useRef } from 'react'

import AnimatedText from '../components/AnimatedText'
import Magnet from '../components/Magnet'
import TextReveal from '../components/TextReveal'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const DECORATIVE_IMAGES = [
  {
    src: '/assets/moon_icon.webp',
    alt: 'Moon icon',
    className: 'w-[50px] h-[50px] sm:w-[120px] sm:h-[120px] md:w-[210px] md:h-[210px] absolute top-[8%] left-[2%] sm:left-[2%] md:left-[4%] z-0 origin-center',
    floatClass: 'float-item-1',
  },
  {
    src: '/assets/p59_1.webp',
    alt: '3D object',
    className: 'w-[45px] h-[45px] sm:w-[100px] sm:h-[100px] md:w-[180px] md:h-[180px] absolute bottom-[8%] left-[4%] sm:left-[6%] md:left-[10%] z-0 origin-center',
    floatClass: 'float-item-2',
  },
  {
    src: '/assets/lego_icon.webp',
    alt: 'Lego icon',
    className: 'w-[50px] h-[50px] sm:w-[120px] sm:h-[120px] md:w-[210px] md:h-[210px] absolute top-[8%] right-[2%] sm:right-[2%] md:right-[4%] z-0 origin-center',
    floatClass: 'float-item-3',
  },
  {
    src: '/assets/group_134.webp',
    alt: '3D group',
    className: 'w-[55px] h-[55px] sm:w-[130px] sm:h-[130px] md:w-[220px] md:h-[220px] absolute bottom-[8%] right-[4%] sm:right-[6%] md:right-[10%] z-0 origin-center',
    floatClass: 'float-item-4',
  },
]

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Pin section
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: '+=100%',
      pin: true,
      scrub: true,
      pinSpacing: true,
      invalidateOnRefresh: true,
    })

    // Animate the decorative images on scroll entry using GSAP
    gsap.fromTo('.about-shape',
      { opacity: 0, scale: 0, rotate: -30 },
      {
        opacity: () => {
          const isMobile = window.innerWidth < 640
          return isMobile ? 0.8 : 1.0
        },
        scale: 1,
        rotate: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.5)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        }
      }
    )
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} id="about" className="relative h-screen flex items-center justify-center px-5 sm:px-8 md:px-10 py-12 bg-[#0C0C0C] overflow-hidden">
      {/* Decorative images */}
      {DECORATIVE_IMAGES.map((item, i) => (
        <div key={i} className={`about-shape ${item.className}`} style={{ opacity: 0 }}>
          <Magnet padding={120} strength={8}>
            <img src={item.src} alt={item.alt} loading="lazy" className={`w-full h-full ${item.floatClass}`} />
          </Magnet>
        </div>
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
            className="text-[#D7E2EA] font-medium text-center leading-relaxed w-full max-w-[340px] sm:max-w-[760px] px-4 sm:px-0"
            style={{ fontSize: 'clamp(0.85rem, 1.7vw, 1.35rem)', lineHeight: 1.5 }}
          />
        </div>
      </div>
    </section>
  )
}

export default AboutSection
