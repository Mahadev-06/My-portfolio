import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import TextReveal from '../components/TextReveal'
import LineReveal from '../components/LineReveal'

gsap.registerPlugin(ScrollTrigger)

const EXPERTISE = [
  {
    number: '01',
    name: 'Full-Stack Development',
    description:
      'Building scalable, responsive, and modern web applications using React, Next.js, Node.js, Supabase, and cloud technologies. From frontend interfaces to backend integration, I enjoy delivering complete digital solutions.',
  },
  {
    number: '02',
    name: 'Frontend Engineering',
    description:
      'Creating clean, responsive, and accessible user interfaces with modern design principles, smooth animations, and optimized user experiences across desktop and mobile devices.',
  },
  {
    number: '03',
    name: 'Backend & Cloud Integration',
    description:
      'Implementing secure authentication, cloud databases, REST APIs, and backend services using Supabase, Firebase, and modern development workflows to build reliable applications.',
  },
  {
    number: '04',
    name: 'AI-Assisted Development',
    description:
      'Leveraging modern AI development tools including Claude, ChatGPT, GitHub Copilot, Cursor, and Google AI Studio to accelerate development, improve code quality, and rapidly prototype innovative solutions.',
  },
  {
    number: '05',
    name: 'Continuous Learning & Innovation',
    description:
      'Continuously expanding my expertise in Python, Artificial Intelligence, Machine Learning, backend engineering, and software architecture while building real-world projects that solve practical problems.',
  },
]

const ExpertiseSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const isMobile = window.innerWidth < 768

      // Section-level scale reveal (scrubbed)
      gsap.fromTo(
        sectionRef.current,
        { scale: 0.96, opacity: 0.85 },
        {
          scale: 1,
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'top 60%',
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      )

      // Staggered expertise items reveal
      const items = gsap.utils.toArray<HTMLElement>('.expertise-item')
      gsap.fromTo(
        items,
        { y: isMobile ? 35 : 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: isMobile ? 0.5 : 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.expertise-container',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
            invalidateOnRefresh: true,
          },
        }
      )
    },
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      id="services"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-6 sm:px-8 md:px-10 py-12 sm:py-24 md:py-32"
      style={{ background: '#FFFFFF' }}
    >
      <TextReveal
        text="Expertise"
        className="text-[#0C0C0C] mb-16 sm:mb-20 md:mb-28 w-full"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      />

      <div className="expertise-container max-w-5xl mx-auto">
        {EXPERTISE.map((item, i) => (
          <div key={item.number} className="expertise-item" style={{ opacity: 0 }}>
            <div
              className="flex flex-col sm:flex-row items-start gap-4 sm:gap-8 md:gap-12 py-6 sm:py-10 md:py-12"
              style={{
                borderBottom: i < EXPERTISE.length - 1 ? '1px solid rgba(12, 12, 12, 0.15)' : 'none',
                borderTop: i === 0 ? '1px solid rgba(12, 12, 12, 0.15)' : 'none',
              }}
            >
              <span
                className="font-black text-[#0C0C0C] flex-shrink-0"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)', lineHeight: 1 }}
              >
                {item.number}
              </span>
              <div className="flex flex-col gap-2 pt-2 sm:pt-4 md:pt-6">
                <h3
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {item.name}
                </h3>
                <LineReveal
                  text={item.description}
                  className="font-light leading-relaxed max-w-2xl text-[#0C0C0C]"
                  style={{
                    fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                    opacity: 0.6,
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ExpertiseSection
