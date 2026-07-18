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
    const inners = gsap.utils.toArray('.shape-inner')
    const isMobile = window.innerWidth < 768

    // Create a timeline that triggers when the footer comes into view
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.shape-container',
        start: 'top 98%',
        toggleActions: 'play none none reverse',
        invalidateOnRefresh: true,
      }
    })

    if (isMobile) {
      // Clean, hardware-accelerated fade & slide-up on mobile to maintain 60fps scrolling
      tl.fromTo(shapes,
        {
          y: 35,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.04,
        }
      )
    } else {
      // Staggered translation entry for the outer containers (desktop)
      tl.fromTo(shapes, 
        {
          y: 80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'back.out(1.2)',
          stagger: 0.05,
        }
      )

      // Jelly morph deformation on the inner elements in sync (desktop)
      tl.fromTo(inners,
        {
          scaleX: 1.5,
          scaleY: 0.3,
          rotation: (i) => i % 2 === 0 ? -120 : 120,
        },
        {
          scaleX: 1,
          scaleY: 1,
          rotation: 0,
          duration: 0.8,
          ease: 'elastic.out(1, 0.6)',
          stagger: 0.05,
        },
        '<0.1' // Start shortly after translation begins
      )
    }

    const cleanups: (() => void)[] = []

    // Only enable hover jelly wobbles on desktop to prevent ghost-tap state issues on touch screens
    if (!isMobile) {
      shapes.forEach((shape: any) => {
        const inner = shape.querySelector('.shape-inner')
        if (!inner) return

        const onMouseEnter = () => {
          const hoverTl = gsap.timeline()
          hoverTl.to(inner, { scaleX: 1.25, scaleY: 0.75, rotation: 15, duration: 0.15, ease: 'power1.out' })
            .to(inner, { scaleX: 0.8, scaleY: 1.2, rotation: -10, duration: 0.15, ease: 'power1.inOut' })
            .to(inner, { scaleX: 1.1, scaleY: 0.9, rotation: 5, duration: 0.15, ease: 'power1.inOut' })
            .to(inner, { scaleX: 0.95, scaleY: 1.05, rotation: -2, duration: 0.15, ease: 'power1.inOut' })
            .to(inner, { scaleX: 1, scaleY: 1, rotation: 0, duration: 0.2, ease: 'power1.out' })
        }

        const onMouseLeave = () => {
          gsap.to(inner, {
            scaleX: 1,
            scaleY: 1,
            rotation: 0,
            duration: 0.4,
            ease: 'power2.out',
            overwrite: 'auto'
          })
        }

        shape.addEventListener('mouseenter', onMouseEnter)
        shape.addEventListener('mouseleave', onMouseLeave)

        cleanups.push(() => {
          shape.removeEventListener('mouseenter', onMouseEnter)
          shape.removeEventListener('mouseleave', onMouseLeave)
        })
      })
    }

    // Enforce cursor-follow symbols for social links
    if (!isMobile) {
      const socialLinks = gsap.utils.toArray('.social-link-item')

      socialLinks.forEach((el: any) => {
        const hoverCard = el.querySelector('.social-hover-card')
        if (!hoverCard) return

        gsap.set(hoverCard, { yPercent: -50, xPercent: -50 })

        const setX = gsap.quickTo(hoverCard, 'x', { duration: 0.3, ease: 'power3.out' })
        const setY = gsap.quickTo(hoverCard, 'y', { duration: 0.3, ease: 'power3.out' })
        let firstEnter = true

        const align = (e: MouseEvent) => {
          const size = 64
          const minX = size / 2 + 10
          const maxX = window.innerWidth - size / 2 - 10
          const minY = size / 2 + 10
          const maxY = window.innerHeight - size / 2 - 10

          const clampedX = Math.max(minX, Math.min(maxX, e.clientX))
          const clampedY = Math.max(minY, Math.min(maxY, e.clientY))

          if (firstEnter) {
            setX(clampedX, clampedX)
            setY(clampedY, clampedY)
            firstEnter = false
          } else {
            setX(clampedX)
            setY(clampedY)
          }
        }

        const startFollow = () => document.addEventListener('mousemove', align)
        const stopFollow = () => document.removeEventListener('mousemove', align)

        const animation = gsap.to(hoverCard, {
          autoAlpha: 1,
          scale: 1,
          duration: 0.25,
          ease: 'back.out(1.5)',
          paused: true,
          onReverseComplete: stopFollow
        })

        const onMouseEnterLink = (e: MouseEvent) => {
          firstEnter = true
          animation.play()
          startFollow()
          align(e)
        }

        const onMouseLeaveLink = () => {
          animation.reverse()
        }

        el.addEventListener('mouseenter', onMouseEnterLink)
        el.addEventListener('mouseleave', onMouseLeaveLink)

        cleanups.push(() => {
          el.removeEventListener('mouseenter', onMouseEnterLink)
          el.removeEventListener('mouseleave', onMouseLeaveLink)
          document.removeEventListener('mousemove', align)
        })
      })
    }

    return () => {
      cleanups.forEach((cleanup) => cleanup())
    }
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
              { 
                label: 'Instagram', 
                url: 'https://instagram.com/__.mahadev.__6',
                color: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                icon: (
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                )
              },
              { 
                label: 'GitHub', 
                url: 'https://github.com/Mahadev-06',
                color: '#181717',
                icon: (
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                )
              },
              { 
                label: 'LinkedIn', 
                url: 'https://www.linkedin.com/in/mahadev-patro-a76267377?utm_source=share_via&utm_content=profile&utm_medium=member_android',
                color: '#0A66C2',
                icon: (
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                )
              }
            ].map(social => (
              <a 
                key={social.label} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link-item text-gray-300 hover:text-white transition-colors text-xs sm:text-sm font-medium relative"
              >
                {social.label}
                <div className="social-hover-card" style={{ background: social.color }}>
                  {social.icon}
                </div>
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

const Shape: React.FC<{ children: React.ReactNode; delay: number; color: string }> = ({ children, color }) => (
  <div className="shape w-[9.5vw] md:w-[11vw] max-w-[140px] min-w-[24px] aspect-square flex-shrink-0" style={{ color, opacity: 0 }}>
    <div className="shape-inner w-full h-full transform-gpu origin-center">
      {children}
    </div>
  </div>
)

export default FooterSection
