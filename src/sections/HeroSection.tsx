import React, { useRef } from 'react'
import FadeIn from '../components/FadeIn'
import TiltedCard from '../components/TiltedCard'
import ContactButton from '../components/ContactButton'
import Magnet from '../components/Magnet'
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
    <section ref={sectionRef} className="h-screen flex flex-col relative" style={{ overflowX: 'clip' }}>
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
        <div ref={cardContainerRef} className="absolute inset-x-0 bottom-[12%] sm:bottom-0 top-[20%] sm:top-auto h-[62%] sm:h-auto flex justify-center items-center sm:items-center sm:pb-12 z-10 pointer-events-none">
          <FadeIn
            delay={0.6}
            y={30}
            className="pointer-events-auto"
          >
            <TiltedCard
              imageSrc="/me.jpg"
              altText="Mahadev patro - Full-Stack Developer"
              captionText="Mahadev patro - GNX"
              containerHeight="clamp(280px, 46vw, 520px)"
              containerWidth="clamp(280px, 46vw, 520px)"
              imageHeight="clamp(280px, 46vw, 520px)"
              imageWidth="clamp(280px, 46vw, 520px)"
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
          className="absolute top-[18%] left-[6%] sm:left-[10%] md:left-[12%] w-[60px] sm:w-[110px] md:w-[180px] z-20 pointer-events-auto"
        >
          <Magnet padding={120} strength={8}>
            <img
              src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
              alt="Moon 3D Asset"
              className="w-full float-item-1 opacity-40 sm:opacity-100"
            />
          </Magnet>
        </FadeIn>

        <FadeIn
          delay={0.9}
          y={20}
          className="absolute top-[22%] right-[6%] sm:right-[10%] md:right-[12%] w-[60px] sm:w-[110px] md:w-[180px] z-20 pointer-events-auto"
        >
          <Magnet padding={120} strength={8}>
            <img
              src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
              alt="Lego 3D Asset"
              className="w-full float-item-3 opacity-40 sm:opacity-100"
            />
          </Magnet>
        </FadeIn>

        {/* Bottom bar - pointer-events-none allows cursor to hover the card underneath */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end gap-6 sm:gap-0 pb-8 sm:pb-12 md:pb-16 px-6 md:px-12 z-20 pointer-events-none transform-gpu will-change-transform" style={{ backfaceVisibility: 'hidden' }}>
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
