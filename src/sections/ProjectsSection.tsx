import React from 'react'
import { createPortal } from 'react-dom'
import ScrollStack, { ScrollStackItem } from '../components/ScrollStack'
import TextReveal from '../components/TextReveal'

interface Project {
  number: string
  category: string
  name: string
  col1Images: [string, string]
  col2Image: string
  liveUrl?: string
  overview: string
  problem: string
  solution: string
  features: string[]
  tech: string[]
}

const PROJECTS: Project[] = [
  {
    number: '01',
    category: 'Client',
    name: 'Premashraya',
    col1Images: [
      '/premashraya1.webp',
      '/premashraya2.webp',
    ],
    col2Image: '/premashraya3.webp',
    liveUrl: 'https://premashraya.vercel.app/',
    overview: 'Premashraya is a modern, highly performant, and premium web application built for the Premashraya Charitable Trust—a free cancer patient shelter based in Bhubaneswar and Cuttack, Odisha, India. The platform is designed to connect patients and their families with the shelter\'s services, facilitate direct donations, and make it seamless to inquire about stays.',
    problem: 'Cancer treatment (especially chemotherapy and radiation) requires patients to stay near major treatment centers in cities like Bhubaneswar and Cuttack for weeks or months. This introduces severe financial strain for accommodations and food, lack of sanitized lodging options for patients with compromised immune systems, logistical navigation stress, and emotional exhaustion on caregivers.',
    solution: 'The Premashraya Care Web App addresses these problems by providing clean digital access to amenities (rooms, floor plans, sanitization rules), clear visibility into hospital guidance teams, frictionless donation options (Razorpay and copyable UPI details), bilingual translations (English and Odia), and light-speed mobile performance.',
    features: [
      'Bilingual Interface (English & Odia): Toggle languages instantly via a context-driven state manager without page reloads.',
      'Premium User Experience: Smooth, non-invasive inertia scrolling globally integrated via Lenis and dynamic micro-interactions powered by Framer Motion.',
      'Interactive Donation Center: Impact-linked giving options, secure UPI copy chip, copyable Bank Account details (Axis Bank Ltd), and Razorpay checkout support.',
      'SEO & Performance Optimization: High-performance media loading using custom image optimization, responsive sizes, and structured metadata schema markup (LD-JSON).',
      'Bilingual Contact Form: Fully integrated with Formspree, featuring client-side character filtering to prevent invalid phone numbers or names dynamically.'
    ],
    tech: ['Next.js 16', 'React 19', 'Tailwind CSS v4', 'Framer Motion v12', 'Lenis', 'Lucide React', 'Formspree', 'React Context API']
  },
  {
    number: '02',
    category: 'Personal',
    name: 'Kinfolk',
    col1Images: [
      '/kinfolk1.webp',
      '/kinfolk2.webp',
    ],
    col2Image: '/kinfolk3.webp',
    liveUrl: 'https://kinfolk-zjp4.vercel.app/',
    overview: 'A design-focused personal exploration site inspired by modern editorial structures.',
    problem: 'Standard web galleries feel rigid and fail to represent the editorial storytelling of modern layouts.',
    solution: 'Built a highly interactive editorial interface with fluid scroll animations, typographic emphasis, and modern aesthetic choices.',
    features: [
      'Editorial layouts',
      'Dynamic animations',
      'Responsive design',
      'Typographic hierarchy',
      'Custom hover states'
    ],
    tech: ['React', 'GSAP', 'Tailwind', 'Vercel']
  },
  {
    number: '03',
    category: 'Personal',
    name: 'Online Wardrobe',
    col1Images: [
      '/wardrobe1.webp',
      '/wardrobe2.webp',
    ],
    col2Image: '/wardrobe3.webp',
    overview: 'A personal wardrobe organizer application to catalog clothing items and plan outfits.',
    problem: 'Tracking personal clothing items and coordinating outfits is usually disorganized and manual.',
    solution: 'Developed a clean layout dashboard allowing clothing categorization, outfit builder logic, and wardrobe overview.',
    features: [
      'Clothing catalog',
      'Outfit planner',
      'Categorized filters',
      'Modern dashboard',
      'Responsive design'
    ],
    tech: ['React', 'Tailwind', 'Vercel']
  },
]

const ProjectCard: React.FC<{ project: Project; onViewClick: () => void }> = ({ project, onViewClick }) => {
  return (
    <div
      onClick={onViewClick}
      className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] p-4 sm:p-5 md:p-6 cursor-pointer hover:border-white/40 transition-colors duration-300 group"
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
          <button
            onClick={(e) => {
              e.stopPropagation()
              onViewClick()
            }}
            className="rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-semibold uppercase tracking-widest px-5 py-2.5 sm:px-8 sm:py-3 md:px-10 md:py-3.5 text-[10px] sm:text-xs md:text-sm hover:bg-[#D7E2EA]/10 transition-colors duration-200 cursor-pointer inline-flex items-center"
          >
            View Details
          </button>
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
            loading="lazy"
          />
          <img
            src={project.col1Images[1]}
            alt={`${project.name} preview 2`}
            className="w-full rounded-[30px] sm:rounded-[40px] md:rounded-[45px] object-cover"
            style={{ height: 'clamp(130px, 18vw, 250px)' }}
            loading="lazy"
          />
        </div>
        {/* Right column - 60% */}
        <div className="w-[60%] flex">
          <img
            src={project.col2Image}
            alt={`${project.name} main preview`}
            className="w-full rounded-[30px] sm:rounded-[40px] md:rounded-[45px] object-cover border border-transparent group-hover:border-white/10 transition-colors duration-300"
            style={{ height: '100%', minHeight: '100%', objectFit: 'cover' }}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}

const ProjectsSection: React.FC = () => {
  const sectionRef = React.useRef<HTMLElement>(null)
  const [isMobile, setIsMobile] = React.useState(false)
  const [activeProject, setActiveProject] = React.useState<Project | null>(null)

  React.useLayoutEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Lock body scroll when project overlay is active
  React.useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [activeProject])

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-6 sm:px-8 md:px-10 py-12 sm:py-24 md:py-32"
      style={{ background: '#0C0C0C' }}
    >
      <TextReveal
        text="Projects"
        className="hero-heading mb-16 sm:mb-20 md:mb-28 w-full"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      />

      <div className="max-w-7xl mx-auto">
        <ScrollStack
          useWindowScroll={true}
          itemDistance={isMobile ? 120 : 60}
          itemScale={0.03}
          itemStackDistance={isMobile ? 12 : 25}
          stackPosition={isMobile ? '2%' : '6%'}
          scaleEndPosition="2%"
          baseScale={isMobile ? 0.95 : 0.92}
        >
          {PROJECTS.map((project) => (
            <ScrollStackItem key={project.number}>
              <ProjectCard project={project} onViewClick={() => setActiveProject(project)} />
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>

      {/* Premium Detailed Overlay Modal */}
      {activeProject && typeof document !== 'undefined' && createPortal(
        <div
          data-lenis-prevent
          className="fixed inset-0 z-[999999] bg-[#0C0C0C] overflow-y-auto px-6 py-8 sm:py-16 flex flex-col items-center animate-fadeIn"
        >
          <div className="max-w-4xl w-full flex flex-col gap-6 sm:gap-10">
            {/* Header Navigation */}
            <div className="flex justify-between items-center border-b border-gray-800 pb-4">
              <button
                onClick={() => setActiveProject(null)}
                className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#D7E2EA] hover:text-white flex items-center gap-2 transition cursor-pointer"
              >
                &larr; Back to Projects
              </button>
              <span className="text-gray-500 font-bold uppercase tracking-widest text-[10px] sm:text-xs">
                {activeProject.category}
              </span>
            </div>

            {/* Banner Image */}
            <div className="w-full overflow-hidden rounded-[20px] sm:rounded-[32px] border border-gray-800 aspect-[16/9] shadow-2xl">
              <img
                src={activeProject.col2Image}
                alt={activeProject.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title & Category Info */}
            <div className="flex flex-col gap-1 sm:gap-2">
              <h2 className="hero-heading font-black uppercase text-3xl sm:text-6xl md:text-7xl leading-none tracking-tight">
                {activeProject.name}
              </h2>
            </div>

            {/* Grid Specifications */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
              {/* Content Areas (Overview, Problem, Solution, Features) */}
              <div className="md:col-span-2 flex flex-col gap-8 sm:gap-10">
                <div className="flex flex-col gap-2">
                  <h3 className="text-white font-bold uppercase tracking-wider text-sm sm:text-base border-l-2 border-[#D7E2EA] pl-3">
                    Overview
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed pl-4">
                    {activeProject.overview}
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-white font-bold uppercase tracking-wider text-sm sm:text-base border-l-2 border-[#D7E2EA] pl-3">
                    Problem
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed pl-4">
                    {activeProject.problem}
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-white font-bold uppercase tracking-wider text-sm sm:text-base border-l-2 border-[#D7E2EA] pl-3">
                    Solution
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed pl-4">
                    {activeProject.solution}
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-white font-bold uppercase tracking-wider text-sm sm:text-base border-l-2 border-[#D7E2EA] pl-3">
                    Features
                  </h3>
                  <ul className="list-inside list-disc text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed pl-4 flex flex-col gap-1.5 sm:gap-2">
                    {activeProject.features.map((feat, index) => (
                      <li key={index} className="pl-1">
                        <span className="text-[#D7E2EA] font-medium">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sidebar Info (Tech Stack, Live Visit Button) */}
              <div className="flex flex-col gap-6 sm:gap-8 border-t md:border-t-0 md:border-l border-gray-800 pt-6 md:pt-0 md:pl-8">
                <div className="flex flex-col gap-3">
                  <h3 className="text-white font-bold uppercase tracking-wider text-sm sm:text-base pl-1">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.tech.map((t, index) => (
                      <span
                        key={index}
                        className="border border-gray-800 bg-[#121212] text-[#D7E2EA] text-[10px] sm:text-xs font-semibold px-3 py-1.5 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 sm:mt-8 flex flex-col gap-4">
                  {activeProject.liveUrl ? (
                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center rounded-full bg-gradient-to-r from-[#D7E2EA] to-white text-black hover:opacity-90 font-bold uppercase tracking-widest py-3 sm:py-3.5 text-[10px] sm:text-xs transition duration-300 shadow-[0_4px_24px_rgba(255,255,255,0.06)] cursor-pointer"
                    >
                      Visit Website &rarr;
                    </a>
                  ) : (
                    <button
                      disabled
                      className="w-full text-center rounded-full border-2 border-gray-800 text-gray-600 font-bold uppercase tracking-widest py-3 sm:py-3.5 text-[10px] sm:text-xs cursor-not-allowed"
                    >
                      Website Coming Soon
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  )
}

export default ProjectsSection
