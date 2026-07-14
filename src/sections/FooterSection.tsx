import React, { useRef } from 'react'
import FadeIn from '../components/FadeIn'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const FooterSection: React.FC = () => {
  const container = useRef<HTMLElement>(null)

  useGSAP(() => {
    const shapes = gsap.utils.toArray('.shape')
    
    // Staggered scroll-linked translation entry for the outer containers
    gsap.fromTo(shapes, 
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: 'power1.out',
        stagger: {
          each: 0.08,
          from: 'start'
        },
        scrollTrigger: {
          trigger: '.shape-container',
          start: 'top 95%',
          end: 'bottom 85%',
          scrub: 1.5,
          invalidateOnRefresh: true,
        }
      }
    )

    // Scroll-linked jelly morph deformation on the inner elements
    const inners = gsap.utils.toArray('.shape-inner')
    gsap.fromTo(inners,
      {
        scaleX: 1.3,
        scaleY: 0.5,
        rotation: (i) => i % 2 === 0 ? -90 : 90,
      },
      {
        scaleX: 1,
        scaleY: 1,
        rotation: 0,
        ease: 'power1.out',
        stagger: {
          each: 0.08,
          from: 'start'
        },
        scrollTrigger: {
          trigger: '.shape-container',
          start: 'top 95%',
          end: 'bottom 85%',
          scrub: 1.5,
          invalidateOnRefresh: true,
        }
      }
    )

    // Interactive organic jelly wobble animations on hover
    shapes.forEach((shape: any) => {
      const inner = shape.querySelector('.shape-inner')
      if (!inner) return

      shape.addEventListener('mouseenter', () => {
        const tl = gsap.timeline()
        tl.to(inner, { scaleX: 1.25, scaleY: 0.75, rotation: 15, duration: 0.15, ease: 'power1.out' })
          .to(inner, { scaleX: 0.8, scaleY: 1.2, rotation: -10, duration: 0.15, ease: 'power1.inOut' })
          .to(inner, { scaleX: 1.1, scaleY: 0.9, rotation: 5, duration: 0.15, ease: 'power1.inOut' })
          .to(inner, { scaleX: 0.95, scaleY: 1.05, rotation: -2, duration: 0.15, ease: 'power1.inOut' })
          .to(inner, { scaleX: 1, scaleY: 1, rotation: 0, duration: 0.2, ease: 'power1.out' })
      })

      shape.addEventListener('mouseleave', () => {
        gsap.to(inner, {
          scaleX: 1,
          scaleY: 1,
          rotation: 0,
          duration: 0.4,
          ease: 'power2.out',
          overwrite: 'auto'
        })
      })
    })
    // Scroll-triggered SVG path morphing
    const PATH_DOWN = 'M0-0.3C0-0.3,464,156,1139,156S2278-0.3,2278-0.3V683H0V-0.3z'
    const PATH_CENTER = 'M0-0.3C0-0.3,464,0,1139,0s1139-0.3,1139-0.3V683H0V-0.3z'

    ScrollTrigger.create({
      trigger: container.current,
      start: 'top bottom',
      toggleActions: 'play pause resume reverse',
      onEnter: (self) => {
        const velocity = self.getVelocity()
        const variation = Math.min(Math.max(velocity / 10000, -0.5), 0.5)

        gsap.fromTo('#bouncy-path', 
          {
            attr: { d: PATH_DOWN }
          }, 
          {
            duration: 2, 
            attr: { d: PATH_CENTER }, 
            ease: `elastic.out(${1 + variation}, ${1 - variation})`, 
            overwrite: 'auto'
          }
        )
      }
    })
  }, { scope: container })

  return (
    <footer 
      ref={container} 
      className="text-white pt-32 pb-12 overflow-hidden relative z-30 min-h-[480px] bg-transparent" 
      style={{ marginTop: '-40px' }}
    >
      {/* Absolute Bouncy SVG Background & Noise texture overlay */}
      <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
        <svg 
          preserveAspectRatio="none" 
          id="footer-img" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 2278 683"
          className="w-full h-full block overflow-visible"
        >
          <defs>
            <linearGradient id="grad-1" x1="0" y1="0" x2="2278" y2="683" gradientUnits="userSpaceOnUse">
              <stop offset="0.2" stopColor="#fec5fb"></stop>
              <stop offset="0.8" stopColor="#00bae2"></stop>
            </linearGradient>
          </defs>
          <path 
            id="bouncy-path" 
            fill="url(#grad-1)" 
            d="M0-0.3C0-0.3,464,156,1139,156S2278-0.3,2278-0.3V683H0V-0.3z"
          />
        </svg>
        <div 
          className="absolute inset-0 mix-blend-color-dodge opacity-[0.12] pointer-events-none" 
          style={{ 
            backgroundImage: 'url("https://assets.codepen.io/16327/noise.png")',
            backgroundSize: '150px 150px'
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pb-12 md:pb-24 flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12 relative z-10">
        
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
      <div className="w-full flex justify-between items-end px-4 sm:px-8 pb-8 gap-1.5 sm:gap-4 overflow-hidden shape-container relative z-10">
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
    <div className="shape-inner w-full h-full transform-gpu origin-center">
      {children}
    </div>
  </FadeIn>
)

export default FooterSection
