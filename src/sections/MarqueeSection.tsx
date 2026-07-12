import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiOpenjdk,
  SiC,
  SiPostgresql,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiGit,
  SiGithub,
  SiSupabase,
  SiFirebase,
  SiVercel,
  SiSentry,
  SiFramer,
  SiDribbble,
} from '@icons-pack/react-simple-icons'

gsap.registerPlugin(ScrollTrigger)

interface Skill {
  name: string
  icon: React.ReactNode
}

const SKILLS: Skill[] = [
  // Row 1 Skills
  { name: 'React', icon: <SiReact size="100%" /> },
  { name: 'Node JS', icon: <SiNodedotjs size="100%" /> },
  { name: 'Python', icon: <SiPython size="100%" /> },
  { name: 'Java', icon: <SiOpenjdk size="100%" /> },
  { name: 'C', icon: <SiC size="100%" /> },
  { name: 'SQL', icon: <SiPostgresql size="100%" /> },
  { name: 'HTML', icon: <SiHtml5 size="100%" /> },
  { name: 'CSS', icon: <SiCss size="100%" /> },
  { name: 'JavaScript', icon: <SiJavascript size="100%" /> },

  // Row 2 Skills
  { name: 'Git', icon: <SiGit size="100%" /> },
  { name: 'GitHub', icon: <SiGithub size="100%" /> },
  { name: 'Supabase', icon: <SiSupabase size="100%" /> },
  { name: 'Firebase', icon: <SiFirebase size="100%" /> },
  { name: 'Vercel', icon: <SiVercel size="100%" /> },
  { name: 'Sentry', icon: <SiSentry size="100%" /> },
  { name: 'Framer', icon: <SiFramer size="100%" /> },
  { name: 'Dribbble', icon: <SiDribbble size="100%" /> },
]

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
      className="py-16 sm:py-24 overflow-hidden select-none"
      style={{
        background: '#0C0C0C',
        transform: 'rotate(-3deg) scale(1.05)',
      }}
    >
      {/* Row 1 - moves RIGHT */}
      <div className="relative mb-14 sm:mb-20 select-none w-full overflow-hidden py-4">
        <div
          ref={row1Ref}
          className="relative h-14 sm:h-20 w-[300%]"
          style={{ transform: `translate3d(-1800px, 0px, 0px)`, willChange: 'transform' }}
        >
          {/* Background Purple Ribbon (Scrolling together to match width perfectly) */}
          <div
            className="absolute bg-[#A855F7] h-full w-full top-[-8px] sm:top-[-12px] left-0 z-0"
            style={{ transform: 'translate3d(0, 0, 0)' }}
          />
          {/* Background Pink/Red Gradient Ribbon (Scrolling together to match width perfectly) */}
          <div
            className="absolute bg-gradient-to-r from-pink-500 to-rose-500 h-full w-full top-[8px] sm:top-[12px] left-0 z-0"
            style={{ transform: 'translate3d(0, 0, 0)' }}
          />

          {/* Foreground White Scrolling Ribbon */}
          <div className="absolute inset-0 bg-white shadow-2xl flex items-center gap-12 sm:gap-20 z-10 px-10 py-2 w-full">
            {tripled1.map((skill, i) => (
              <div
                key={`r1-${skill.name}-${i}`}
                className="flex items-center gap-4 sm:gap-6 text-black font-kanit font-black uppercase text-lg sm:text-3xl tracking-wider whitespace-nowrap flex-shrink-0"
              >
                <span className="w-6 h-6 sm:w-10 sm:h-10 text-black flex-shrink-0 flex items-center justify-center">
                  {skill.icon}
                </span>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Row 2 - moves LEFT */}
      <div className="relative select-none w-full overflow-hidden py-4">
        <div
          ref={row2Ref}
          className="relative h-14 sm:h-20 w-[300%]"
          style={{ transform: `translate3d(-1000px, 0px, 0px)`, willChange: 'transform' }}
        >
          {/* Background Purple Ribbon (Scrolling together to match width perfectly) */}
          <div
            className="absolute bg-[#A855F7] h-full w-full top-[-8px] sm:top-[-12px] left-0 z-0"
            style={{ transform: 'translate3d(0, 0, 0)' }}
          />
          {/* Background Pink/Red Gradient Ribbon (Scrolling together to match width perfectly) */}
          <div
            className="absolute bg-gradient-to-r from-pink-500 to-rose-500 h-full w-full top-[8px] sm:top-[12px] left-0 z-0"
            style={{ transform: 'translate3d(0, 0, 0)' }}
          />

          {/* Foreground White Scrolling Ribbon */}
          <div className="absolute inset-0 bg-white shadow-2xl flex items-center gap-12 sm:gap-20 z-10 px-10 py-2 w-full">
            {tripled2.map((skill, i) => (
              <div
                key={`r2-${skill.name}-${i}`}
                className="flex items-center gap-4 sm:gap-6 text-black font-kanit font-black uppercase text-lg sm:text-3xl tracking-wider whitespace-nowrap flex-shrink-0"
              >
                <span className="w-6 h-6 sm:w-10 sm:h-10 text-black flex-shrink-0 flex items-center justify-center">
                  {skill.icon}
                </span>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MarqueeSection
