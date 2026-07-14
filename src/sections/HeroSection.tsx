import React, { useRef } from 'react'
import FadeIn from '../components/FadeIn'
import TiltedCard from '../components/TiltedCard'
import ContactButton from '../components/ContactButton'
import Magnet from '../components/Magnet'
import LineReveal from '../components/LineReveal'
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
    <section ref={sectionRef} id="home" className="h-screen flex flex-col relative" style={{ overflowX: 'clip' }}>
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
        {/* Hero Heading */}
        <FadeIn delay={0.15} y={40}>
          <div className="px-4 sm:px-6 md:px-8 w-full text-center">
            <h1 className="hero-heading font-black uppercase tracking-normal leading-[0.8] whitespace-nowrap mt-8 sm:mt-10 md:mt-12 inline-block transform-gpu origin-center" style={{ fontSize: 'clamp(3.2rem, 15.5vw, 250px)', transform: 'scaleY(1.55)' }}>
              HI, I'M DEV
            </h1>
          </div>
        </FadeIn>

        {/* Portrait - centered with flex to avoid Framer Motion transform override */}
        <div ref={cardContainerRef} className="absolute inset-x-0 bottom-[20%] sm:bottom-0 top-[18%] sm:top-auto h-[55%] sm:h-auto flex justify-center items-center sm:items-center sm:pb-12 z-0 pointer-events-none">
          <FadeIn
            delay={0.6}
            y={30}
            className="pointer-events-auto"
          >
            <TiltedCard
              imageSrc="/me.jpg"
              altText="Mahadev patro - Full-Stack Developer"
              captionText="Mahadev patro - GNX"
              containerHeight="clamp(280px, 36vw, 420px)"
              containerWidth="clamp(280px, 36vw, 420px)"
              imageHeight="clamp(280px, 36vw, 420px)"
              imageWidth="clamp(280px, 36vw, 420px)"
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

        {/* 3D Decorative Floating Assets */}
        <FadeIn
          delay={0.8}
          y={20}
          className="absolute top-[24%] sm:top-[38%] md:top-[40%] left-[2%] sm:left-[10%] md:left-[12%] w-[55px] sm:w-[110px] md:w-[180px] z-30 pointer-events-auto"
        >
          <Magnet padding={120} strength={8}>
            <div className="w-full float-item-1 opacity-40 sm:opacity-100">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_10px_20px_rgba(138,43,226,0.25)]">
                <rect x="25" y="0" width="50" height="100" rx="25" fill="#8A2BE2" />
                <rect x="0" y="25" width="100" height="50" rx="25" fill="#8A2BE2" />
              </svg>
            </div>
          </Magnet>
        </FadeIn>

        <FadeIn
          delay={0.9}
          y={20}
          className="absolute top-[58%] sm:top-[42%] md:top-[44%] right-[2%] sm:right-[10%] md:right-[12%] w-[55px] sm:w-[110px] md:w-[180px] z-30 pointer-events-auto"
        >
          <Magnet padding={120} strength={8}>
            <div className="w-full float-item-3 opacity-40 sm:opacity-100">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_10px_20px_rgba(255,16,160,0.25)]">
                <path d="M100 50 A 50 50 0 1 0 50 100 L 50 50 Z" fill="#FF10A0" />
              </svg>
            </div>
          </Magnet>
        </FadeIn>

        {/* Bottom bar - pointer-events-none allows cursor to hover the card underneath */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end gap-6 sm:gap-0 pb-8 sm:pb-12 md:pb-16 px-6 md:px-12 z-20 pointer-events-none transform-gpu will-change-transform" style={{ backfaceVisibility: 'hidden' }}>
          <FadeIn delay={0.35} y={20} className="pointer-events-auto transform-gpu will-change-transform text-center sm:text-left">
            <LineReveal
              text="A FULL-STACK DEVELOPER BUILDING MODERN WEB APPLICATIONS WITH AI ✨"
              className="text-[#D7E2EA] font-medium uppercase tracking-wide leading-relaxed max-w-[280px]"
              style={{ fontSize: 'clamp(0.7rem, 1.2vw, 0.9rem)', backfaceVisibility: 'hidden' }}
            />
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
