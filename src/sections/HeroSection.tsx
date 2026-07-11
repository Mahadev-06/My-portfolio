import React, { useRef } from 'react'
import FadeIn from '../components/FadeIn'
import TiltedCard from '../components/TiltedCard'
import ContactButton from '../components/ContactButton'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardContainerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.to(cardContainerRef.current, {
      y: -90,
      scale: 0.96,
      ease: 'none',
      force3D: true,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.3,
        invalidateOnRefresh: true
      }
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="h-screen flex flex-col" style={{ overflowX: 'clip' }}>
      {/* Navbar */}
      <FadeIn delay={0} y={-20} className="relative z-30 w-full">
        <nav className="flex justify-between px-6 md:px-12 pt-6 md:pt-8 max-w-[1400px] w-full mx-auto">
          {['ABOUT', 'PROJECTS', 'CONTACT'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[#D7E2EA] font-bold uppercase tracking-wider text-sm md:text-lg cursor-pointer nav-link-roll"
            >
              <span className="roll-front">{link}</span>
              <span className="roll-bottom">{link}</span>
            </a>
          ))}
        </nav>
      </FadeIn>

      {/* Hero Content - takes remaining space */}
      <div className="flex-1 flex flex-col justify-between relative max-w-[1400px] w-full mx-auto">
        {/* Hero Heading - z-10 for depth overlay */}
        <FadeIn delay={0.15} y={40} className="relative z-10">
          <div className="px-4 sm:px-6 md:px-8 w-full text-center">
            <h1 className="apple-lockscreen-heading uppercase whitespace-nowrap mt-14 sm:mt-18 md:mt-24" style={{ fontSize: 'clamp(4.5rem, 18.5vw, 280px)', lineHeight: 1.1 }}>
              HI, I'M DEV
            </h1>
          </div>
        </FadeIn>

        {/* Portrait - centered with flex to avoid Framer Motion transform override - z-20 to sit on top of the text */}
        <div ref={cardContainerRef} className="absolute inset-x-0 bottom-[18%] sm:bottom-0 top-[22%] sm:top-auto h-[55%] sm:h-auto flex justify-center items-center sm:items-center sm:pb-12 z-20 pointer-events-none">
          <FadeIn
            delay={0.6}
            y={30}
            className="pointer-events-auto"
          >
            <TiltedCard
              imageSrc="/me.jpg"
              altText="Mahadev patro - Full-Stack Developer"
              captionText="Mahadev patro - GNX"
              containerHeight="clamp(220px, 38vw, 520px)"
              containerWidth="clamp(220px, 38vw, 520px)"
              imageHeight="clamp(220px, 38vw, 520px)"
              imageWidth="clamp(220px, 38vw, 520px)"
              rotateAmplitude={12}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p className="tilted-card-demo-text">
                  Mahadev patro - GNX
                </p>
              }
            />
          </FadeIn>
        </div>

        {/* Bottom bar - z-30 allows links and buttons to be fully clickable and on top */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end gap-6 sm:gap-0 pb-8 sm:pb-12 md:pb-16 px-6 md:px-12 z-30 pointer-events-none transform-gpu will-change-transform" style={{ backfaceVisibility: 'hidden' }}>
          <FadeIn delay={0.35} y={20} className="pointer-events-auto transform-gpu will-change-transform text-center sm:text-left">
            <p
              className="text-[#D7E2EA] font-medium uppercase tracking-wide leading-relaxed max-w-[280px]"
              style={{ fontSize: 'clamp(0.7rem, 1.2vw, 0.9rem)', backfaceVisibility: 'hidden' }}
            >
              A FULL-STACK DEVELOPER<br/>
              BUILDING MODERN WEB<br/>
              APPLICATIONS WITH AI ✨
            </p>
          </FadeIn>
          <FadeIn delay={0.5} y={20} className="pointer-events-auto transform-gpu will-change-transform">
            <div style={{ backfaceVisibility: 'hidden' }}>
              <ContactButton />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
