import React, { useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import FadeIn from '../components/FadeIn'
import './CertificatesSection.css'

interface Certificate {
  number: string
  title: string
  issuer: string
  image: string
}

const CERTIFICATES: Certificate[] = [
  {
    number: '01',
    title: 'Claude Code in Action',
    issuer: 'Anthropic',
    image: '/certificates/claude_code_in_action.jpg'
  },
  {
    number: '02',
    title: 'Cyber Job Simulation',
    issuer: 'Deloitte',
    image: '/certificates/deloitte_cyber_simulation.jpg'
  },
  {
    number: '03',
    title: 'Claude Code 101',
    issuer: 'Anthropic',
    image: '/certificates/claude_code_101.jpg'
  },
  {
    number: '04',
    title: 'Claude 101',
    issuer: 'Anthropic',
    image: '/certificates/claude_101.jpg'
  },
  {
    number: '05',
    title: 'DevOps Speed Unlocked',
    issuer: 'GUVI | HCL',
    image: '/certificates/devops_speed_unlocked.jpg'
  },
  {
    number: '06',
    title: 'Generative AI Mastermind',
    issuer: 'Outskill',
    image: '/certificates/generative_ai_mastermind.jpg'
  }
]

const CertificatesSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null)

  useGSAP(() => {
    // Disable follow effect on mobile/touch screens to prevent HMR and touch scrolling jank
    if (window.matchMedia('(max-width: 640px)').matches) return

    const containers = gsap.utils.toArray('.cert-container')

    containers.forEach((el: any) => {
      const image = el.querySelector('img.swipeimage')
      if (!image) return

      gsap.set(image, { yPercent: -50, xPercent: -50 })

      const setX = gsap.quickTo(image, 'x', { duration: 0.35, ease: 'power3.out' })
      const setY = gsap.quickTo(image, 'y', { duration: 0.35, ease: 'power3.out' })
      let firstEnter = true

      const align = (e: MouseEvent) => {
        const imgWidth = image.offsetWidth || 320
        const imgHeight = image.offsetHeight || 240
        const minX = imgWidth / 2 + 15
        const maxX = window.innerWidth - imgWidth / 2 - 15
        const minY = imgHeight / 2 + 15
        const maxY = window.innerHeight - imgHeight / 2 - 15

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

      const fade = gsap.to(image, {
        autoAlpha: 1,
        duration: 0.25,
        ease: 'power2.out',
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
  }, { scope: containerRef })

  return (
    <section 
      ref={containerRef}
      id="certificates" 
      className="certificates-section rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative px-6 sm:px-12 md:px-16 py-16 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28 w-full"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Certificates
        </h2>
      </FadeIn>

      <div className="max-w-6xl mx-auto">
        <ul className="certificates-list" role="list">
          {CERTIFICATES.map((cert) => (
            <li key={cert.number}>
              <div 
                className="cert-container"
                onClick={() => setSelectedCert(cert)}
              >
                <div className="cert-left">
                  <span className="cert-number">{cert.number}</span>
                  <h3 className="cert-title">{cert.title}</h3>
                </div>
                <div className="cert-right">
                  <span className="cert-issuer">{cert.issuer}</span>
                </div>
                <img 
                  className="swipeimage" 
                  src={cert.image} 
                  alt={cert.title} 
                />
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Modal Preview for Mobile & Desktop Click */}
      {selectedCert && (
        <div 
          className="cert-modal-overlay"
          onClick={() => setSelectedCert(null)}
        >
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="cert-modal-close" onClick={() => setSelectedCert(null)}>
              &times;
            </button>
            <img src={selectedCert.image} alt={selectedCert.title} className="cert-modal-image" />
            <p className="cert-modal-title">{selectedCert.title}</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default CertificatesSection
