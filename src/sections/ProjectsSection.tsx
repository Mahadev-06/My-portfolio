import React from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import FadeIn from '../components/FadeIn'
import LiveProjectButton from '../components/LiveProjectButton'
import ScrollStack, { ScrollStackItem } from '../components/ScrollStack'

gsap.registerPlugin(ScrollTrigger)

interface Project {
  number: string
  category: string
  name: string
  col1Images: [string, string]
  col2Image: string
  liveUrl?: string
}

const PROJECTS: Project[] = [
  {
    number: '01',
    category: 'Client',
    name: 'Premashraya',
    col1Images: [
      '/premashraya1.png',
      '/premashraya2.png',
    ],
    col2Image: '/premashraya3.png',
  },
  {
    number: '02',
    category: 'Personal',
    name: 'Kinfolk',
    col1Images: [
      '/kinfolk1.png',
      '/kinfolk2.png',
    ],
    col2Image: '/kinfolk3.png',
  },
  {
    number: '03',
    category: 'Personal',
    name: 'Online Wardrobe',
    col1Images: [
      '/wardrobe1.png',
      '/wardrobe2.png',
    ],
    col2Image: '/wardrobe3.png',
  },
]

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div
      className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] p-4 sm:p-5 md:p-6"
      style={{
        background: '#0C0C0C',
      }}
    >
      {/* Top row */}
      <div className="flex flex-wrap items-start justify-between gap-3 mb-3 sm:mb-4 md:mb-5">
        <div className="flex items-start gap-4 sm:gap-6 md:gap-8 flex-wrap">
          <span
            className="hero-heading font-black flex-shrink-0"
            style={{ fontSize: 'clamp(2rem, 7vw, 90px)', lineHeight: 1 }}
          >
            {project.number}
          </span>
          <div className="flex flex-col gap-1 pt-1 sm:pt-2">
            <span
              className="text-[#D7E2EA] font-light uppercase tracking-wider text-xs sm:text-sm"
            >
              {project.category}
            </span>
            <span
              className="text-[#D7E2EA] font-medium uppercase"
              style={{ fontSize: 'clamp(1rem, 2vw, 1.8rem)' }}
            >
              {project.name}
            </span>
          </div>
        </div>
        <div className="flex-shrink-0 pt-1 sm:pt-2">
          {project.liveUrl ? (
            <LiveProjectButton href={project.liveUrl} />
          ) : (
            <button
              disabled
              className="rounded-full border-2 border-gray-700 text-gray-600 font-semibold uppercase tracking-widest px-5 py-2.5 sm:px-8 sm:py-3 md:px-10 md:py-3.5 text-[10px] sm:text-xs md:text-sm cursor-not-allowed"
            >
              Soon
            </button>
          )}
        </div>
      </div>

      {/* Image grid */}
      <div className="flex gap-3 sm:gap-4 md:gap-6">
        {/* Left column - 40% */}
        <div className="w-[40%] flex flex-col gap-3 sm:gap-4 md:gap-5">
          <img
            src={project.col1Images[0]}
            alt={`${project.name} preview 1`}
            className="w-full rounded-[30px] sm:rounded-[40px] md:rounded-[45px] object-cover"
            style={{ height: 'clamp(100px, 12vw, 170px)' }}
          />
          <img
            src={project.col1Images[1]}
            alt={`${project.name} preview 2`}
            className="w-full rounded-[30px] sm:rounded-[40px] md:rounded-[45px] object-cover"
            style={{ height: 'clamp(130px, 18vw, 250px)' }}
          />
        </div>
        {/* Right column - 60% */}
        <div className="w-[60%] flex">
          <img
            src={project.col2Image}
            alt={`${project.name} main preview`}
            className="w-full rounded-[30px] sm:rounded-[40px] md:rounded-[45px] object-cover"
            style={{ height: '100%', minHeight: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  )
}

const ProjectsSection: React.FC = () => {
  const sectionRef = React.useRef<HTMLElement>(null)
  const [isMobile, setIsMobile] = React.useState(false)

  React.useLayoutEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useGSAP(() => {
    if (!isMobile) return

    const cards = gsap.utils.toArray('.mobile-project-card')
    cards.forEach((card: any) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )
    })
  }, { dependencies: [isMobile], scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      <div className="max-w-7xl mx-auto">
        {isMobile ? (
          <div className="flex flex-col gap-8">
            {PROJECTS.map((project) => (
              <div key={project.number} className="mobile-project-card opacity-0">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        ) : (
          <ScrollStack
            useWindowScroll={true}
            itemDistance={60}
            itemScale={0.03}
            itemStackDistance={25}
            stackPosition="6%"
            scaleEndPosition="2%"
            baseScale={0.92}
          >
            {PROJECTS.map((project) => (
              <ScrollStackItem key={project.number}>
                <ProjectCard project={project} />
              </ScrollStackItem>
            ))}
          </ScrollStack>
        )}
      </div>
    </section>
  )
}

export default ProjectsSection
