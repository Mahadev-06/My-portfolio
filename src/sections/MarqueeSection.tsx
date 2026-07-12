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
  category: string
  tagline: string
  color: string
  icon: React.ReactNode
}

const SKILLS: Skill[] = [
  // Row 1 Skills
  {
    name: 'React',
    category: 'Frontend Library',
    tagline: 'Building interactive and component-driven user interfaces.',
    color: '#61DAFB',
    icon: <SiReact size="100%" />,
  },
  {
    name: 'Node JS',
    category: 'Backend Runtime',
    tagline: 'Scalable server-side applications and RESTful APIs.',
    color: '#339933',
    icon: <SiNodedotjs size="100%" />,
  },
  {
    name: 'Python',
    category: 'Programming Language',
    tagline: 'Backend systems, scripting, AI/ML, and automation workflows.',
    color: '#3776AB',
    icon: <SiPython size="100%" />,
  },
  {
    name: 'Java',
    category: 'Programming Language',
    tagline: 'Robust object-oriented programming for enterprise backends.',
    color: '#F89820',
    icon: <SiOpenjdk size="100%" />,
  },
  {
    name: 'C',
    category: 'Programming Language',
    tagline: 'Low-level software development, systems, and structures.',
    color: '#A8B9CC',
    icon: <SiC size="100%" />,
  },
  {
    name: 'SQL',
    category: 'Database Querying',
    tagline: 'Relational data structures, queries, and optimizations.',
    color: '#00BCF2',
    icon: <SiPostgresql size="100%" />,
  },
  {
    name: 'HTML',
    category: 'Web Structure',
    tagline: 'Semantic elements and standard document structuring.',
    color: '#E34F26',
    icon: <SiHtml5 size="100%" />,
  },
  {
    name: 'CSS',
    category: 'Styling & Design',
    tagline: 'Modern layout grids, flexboxes, styling, and transitions.',
    color: '#1572B6',
    icon: <SiCss size="100%" />,
  },
  {
    name: 'JavaScript',
    category: 'Web Logic',
    tagline: 'Dynamic logic, event handling, and core web scripting.',
    color: '#F7DF1E',
    icon: <SiJavascript size="100%" />,
  },

  // Row 2 Skills
  {
    name: 'Git',
    category: 'Version Control',
    tagline: 'Distributed revision control and branch workflows.',
    color: '#F05032',
    icon: <SiGit size="100%" />,
  },
  {
    name: 'GitHub',
    category: 'Collaboration Platforms',
    tagline: 'Hosting developer repositories and coordinating team tasks.',
    color: '#FFFFFF',
    icon: <SiGithub size="100%" />,
  },
  {
    name: 'Supabase',
    category: 'Backend-as-a-Service',
    tagline: 'Open-source Postgres database, instant APIs, and web sockets.',
    color: '#3ECF8E',
    icon: <SiSupabase size="100%" />,
  },
  {
    name: 'Firebase',
    category: 'Backend-as-a-Service',
    tagline: 'Serverless databases, auth models, and quick web hosting.',
    color: '#FFCA28',
    icon: <SiFirebase size="100%" />,
  },
  {
    name: 'Vercel',
    category: 'Hosting & Deployment',
    tagline: 'Optimized cloud deployment platform for frontend frameworks.',
    color: '#FFFFFF',
    icon: <SiVercel size="100%" />,
  },
  {
    name: 'Sentry',
    category: 'Monitoring Tools',
    tagline: 'Real-time code debugging, error tracking, and performance monitoring.',
    color: '#FB4226',
    icon: <SiSentry size="100%" />,
  },
  {
    name: 'Framer',
    category: 'Animation Library',
    tagline: 'Fluid 3D spring layouts and high-performance interactive motion.',
    color: '#0055FF',
    icon: <SiFramer size="100%" />,
  },
  {
    name: 'Dribbble',
    category: 'Design Inspiration',
    tagline: 'Visualizing layout mockups, branding styles, and creative concepts.',
    color: '#EA4C89',
    icon: <SiDribbble size="100%" />,
  },
]

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <div
      className="w-[160px] h-[56px] sm:w-[240px] sm:h-[80px] rounded-xl sm:rounded-2xl flex items-center gap-2 sm:gap-4 px-3 py-2 sm:px-5 sm:py-4 flex-shrink-0 relative overflow-hidden transition-colors duration-300 border border-[#D7E2EA]/10 group hover:border-[#D7E2EA]/25 font-kanit"
      style={{
        background: '#101010',
        transform: 'rotate(3deg)', // Counteract the track rotation
      }}
    >
      {/* Decorative gradient glow that lights up on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${skill.color} 0%, transparent 60%)`,
        }}
      />

      {/* Icon */}
      <div
        style={{ color: skill.color }}
        className="transition-transform duration-500 group-hover:scale-110 flex-shrink-0 flex items-center justify-center z-10 w-8 h-8 sm:w-12 sm:h-12 [&>svg]:w-8 [&>svg]:h-8 sm:[&>svg]:w-12 sm:[&>svg]:h-12"
      >
        {skill.icon}
      </div>

      {/* Name */}
      <div className="flex flex-col z-10">
        <h3 className="text-xs sm:text-lg font-bold uppercase tracking-wider text-white font-kanit leading-none">
          {skill.name}
        </h3>
      </div>
    </div>
  )
}

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

    gsap.fromTo(row1, { x: -1500 }, { x: -900, ease: 'none', force3D: true, scrollTrigger })
    gsap.fromTo(row2, { x: -900 }, { x: -1500, ease: 'none', force3D: true, scrollTrigger })
  }, { scope: sectionRef })

  const row1Skills = SKILLS.slice(0, 9)
  const row2Skills = SKILLS.slice(9)

  const tripled1 = [...row1Skills, ...row1Skills, ...row1Skills]
  const tripled2 = [...row2Skills, ...row2Skills, ...row2Skills]

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-32 overflow-hidden select-none"
      style={{
        background: '#0C0C0C',
        transform: 'rotate(-3deg) scale(1.05)',
      }}
    >
      {/* Row 1 - moves RIGHT */}
      <div
        ref={row1Ref}
        className="flex gap-5 mb-5"
        style={{ transform: `translate3d(-1500px, 0px, 0px)`, willChange: 'transform' }}
      >
        {tripled1.map((skill, i) => (
          <SkillCard key={`r1-${skill.name}-${i}`} skill={skill} />
        ))}
      </div>

      {/* Row 2 - moves LEFT */}
      <div
        ref={row2Ref}
        className="flex gap-5"
        style={{ transform: `translate3d(-900px, 0px, 0px)`, willChange: 'transform' }}
      >
        {tripled2.map((skill, i) => (
          <SkillCard key={`r2-${skill.name}-${i}`} skill={skill} />
        ))}
      </div>
    </section>
  )
}

export default MarqueeSection
