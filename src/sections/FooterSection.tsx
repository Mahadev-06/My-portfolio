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

    // Only enable hover animations on desktop to prevent ghost-tap state issues on touch screens
    if (!isMobile) {
      // Jelly shape wobbles
      shapes.forEach((shape: any) => {
        const inner = shape.querySelector('.shape-inner')
        if (!inner) return

        shape.addEventListener('mouseenter', () => {
          const hoverTl = gsap.timeline()
          hoverTl.to(inner, { scaleX: 1.25, scaleY: 0.75, rotation: 15, duration: 0.15, ease: 'power1.out' })
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

      // Social links hover follow effect
      const socialLinks = gsap.utils.toArray('.social-link')
      socialLinks.forEach((el: any) => {
        const icon = el.querySelector('.social-hover-icon')
        if (!icon) return

        gsap.set(icon, { xPercent: -50, yPercent: -50 })

        const setX = gsap.quickTo(icon, 'x', { duration: 0.3, ease: 'power3.out' })
        const setY = gsap.quickTo(icon, 'y', { duration: 0.3, ease: 'power3.out' })
        let firstEnter = true

        const align = (e: MouseEvent) => {
          if (firstEnter) {
            setX(e.clientX, e.clientX)
            setY(e.clientY, e.clientY)
            firstEnter = false
          } else {
            setX(e.clientX)
            setY(e.clientY)
          }
        }

        const startFollow = () => document.addEventListener('mousemove', align)
        const stopFollow = () => document.removeEventListener('mousemove', align)

        const fade = gsap.to(icon, {
          autoAlpha: 1,
          scale: 1,
          duration: 0.25,
          ease: 'back.out(1.5)',
          paused: true,
          onReverseComplete: stopFollow
        })

        el.addEventListener('mouseenter', (e: MouseEvent) => {
          firstEnter = true
          fade.play()
          startFollow()
          align(e)
        })

        el.addEventListener('mouseleave', () => {
          fade.reverse()
        })
      })
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
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                )
              },
              { 
                label: 'GitHub', 
                url: 'https://github.com/Mahadev-06',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                )
              },
              { 
                label: 'LinkedIn', 
                url: 'https://www.linkedin.com/in/mahadev-patro-a76267377?utm_source=share_via&utm_content=profile&utm_medium=member_android',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                )
              }
            ].map(social => (
              <a 
                key={social.label} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm font-medium social-link relative"
              >
                {social.label}
                <span 
                  className="social-hover-icon hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg fixed pointer-events-none opacity-0 invisible z-[9999]"
                  style={{ transform: 'scale(0.8)' }}
                >
                  {social.icon}
                </span>
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
