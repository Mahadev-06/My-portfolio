import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

interface Skill {
  name: string
}

const SKILLS: Skill[] = [
  // Row 1 Skills
  { name: 'React' },
  { name: 'Node JS' },
  { name: 'Python' },
  { name: 'Java' },
  { name: 'C' },
  { name: 'SQL' },
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'JavaScript' },

  // Row 2 Skills
  { name: 'Git' },
  { name: 'GitHub' },
  { name: 'Supabase' },
  { name: 'Firebase' },
  { name: 'Vercel' },
  { name: 'Sentry' },
  { name: 'Framer' },
  { name: 'Dribbble' },
]

const StarIcon: React.FC = () => (
  <svg viewBox="0 0 100 100" fill="none" className="w-6 h-6 sm:w-10 sm:h-10 text-black flex-shrink-0">
    <path
      d="M 50 10 L 53 38 L 80 25 L 59 44 L 90 50 L 59 56 L 80 75 L 53 62 L 50 90 L 47 62 L 20 75 L 41 56 L 10 50 L 41 44 L 20 25 L 47 38 Z"
      fill="currentColor"
    />
    <circle cx="50" cy="50" r="10" fill="#FFFFFF" stroke="currentColor" strokeWidth="4" />
    <circle cx="50" cy="50" r="4" fill="currentColor" />
  </svg>
)

const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const row1Ref = useRef<HTMLDivElement>(null)
  const row2Ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const section = sectionRef.current
    const row1 = row1Ref.current
    const row2 = row2Ref.current

    if (!section || !row1 || !row2) return

    const scrollTrigger = {
      trigger: section,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 0.35,
      invalidateOnRefresh: true,
    }

    gsap.fromTo(row1, { x: -1800 }, { x: -1000, ease: 'none', force3D: true, scrollTrigger })
    gsap.fromTo(row2, { x: -1000 }, { x: -1800, ease: 'none', force3D: true, scrollTrigger })
  }, { scope: sectionRef })

  const row1Skills = SKILLS.slice(0, 9)
  const row2Skills = SKILLS.slice(9)

  // Triple to ensure infinite seamless scrolling loop
  const tripled1 = [...row1Skills, ...row1Skills, ...row1Skills]
  const tripled2 = [...row2Skills, ...row2Skills, ...row2Skills]

  return (
    <section
      ref={sectionRef}
      className="py-24 sm:py-36 overflow-hidden select-none"
      style={{
        background: '#0C0C0C',
        transform: 'rotate(-3deg) scale(1.05)',
      }}
    >
      {/* Row 1 - moves RIGHT */}
      <div className="relative mb-14 sm:mb-20 select-none">
        {/* Background Purple Ribbon */}
        <div
          className="absolute bg-[#A855F7] h-14 sm:h-20 w-[150%] -left-[25%] top-[-8px] sm:top-[-12px]"
          style={{ transform: 'translate3d(0, 0, 0)' }}
        />
        {/* Background Pink/Red Gradient Ribbon */}
        <div
          className="absolute bg-gradient-to-r from-pink-500 to-rose-500 h-14 sm:h-20 w-[150%] -left-[25%] top-[8px] sm:top-[12px]"
          style={{ transform: 'translate3d(0, 0, 0)' }}
        />

        {/* Foreground White Scrolling Ribbon */}
        <div
          ref={row1Ref}
          className="relative bg-white h-14 sm:h-20 flex items-center gap-12 sm:gap-20 overflow-hidden shadow-2xl py-2 w-[300%]"
          style={{ transform: `translate3d(-1800px, 0px, 0px)`, willChange: 'transform' }}
        >
          {tripled1.map((skill, i) => (
            <div
              key={`r1-${skill.name}-${i}`}
              className="flex items-center gap-4 sm:gap-6 text-black font-kanit font-black uppercase text-lg sm:text-3xl tracking-wider whitespace-nowrap flex-shrink-0"
            >
              <StarIcon />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - moves LEFT */}
      <div className="relative select-none">
        {/* Background Purple Ribbon */}
        <div
          className="absolute bg-[#A855F7] h-14 sm:h-20 w-[150%] -left-[25%] top-[-8px] sm:top-[-12px]"
          style={{ transform: 'translate3d(0, 0, 0)' }}
        />
        {/* Background Pink/Red Gradient Ribbon */}
        <div
          className="absolute bg-gradient-to-r from-pink-500 to-rose-500 h-14 sm:h-20 w-[150%] -left-[25%] top-[8px] sm:top-[12px]"
          style={{ transform: 'translate3d(0, 0, 0)' }}
        />

        {/* Foreground White Scrolling Ribbon */}
        <div
          ref={row2Ref}
          className="relative bg-white h-14 sm:h-20 flex items-center gap-12 sm:gap-20 overflow-hidden shadow-2xl py-2 w-[300%]"
          style={{ transform: `translate3d(-1000px, 0px, 0px)`, willChange: 'transform' }}
        >
          {tripled2.map((skill, i) => (
            <div
              key={`r2-${skill.name}-${i}`}
              className="flex items-center gap-4 sm:gap-6 text-black font-kanit font-black uppercase text-lg sm:text-3xl tracking-wider whitespace-nowrap flex-shrink-0"
            >
              <StarIcon />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MarqueeSection
