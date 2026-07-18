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
    overview: 'Premashraya is a modern, highly performant, and premium web application built for the Premashraya Charitable Trust, a free cancer patient shelter based in Bhubaneswar and Cuttack, Odisha, India. The platform is designed to connect patients and their families with the shelter\'s services, facilitate direct donations, and make it seamless to inquire about stays.',
    problem: 'Cancer treatment (especially chemotherapy and radiation) requires patients to stay near major treatment centers in cities like Bhubaneswar and Cuttack for weeks or months. This introduces severe financial strain for accommodations and food, lack of sanitized lodging options for patients with compromised immune systems, logistical navigation stress, and emotional exhaustion on caregivers.',
    solution: 'The Premashraya Care Web App addresses these problems by providing clean digital access to amenities (rooms, floor plans, sanitization rules), clear visibility into hospital guidance teams, frictionless donation options (Razorpay and copyable UPI details), bilingual translations (English and Odia), and light-speed mobile performance.',
    features: [
      'Bilingual Interface (English & Odia): Toggle languages instantly via a context-driven state manager without page reloads.',
      'Premium User Experience: Smooth, non-invasive inertia scrolling globally integrated via Lenis and dynamic micro-interactions powered by Framer Motion.',
      'Interactive Donation Center: Impact-linked giving options, secure UPI copy chip, copyable Bank Account details, and Razorpay checkout support.',
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
    overview: 'Kinfolk is a modern web application designed to help families map, share, and preserve their lineage. Built with an intuitive node-based interface, it allows users to visually construct their family trees and collaborate with relatives in real time.',
    problem: 'Documenting family history is traditionally a fragmented process. Families either rely on static physical documents that are difficult to update and share, or they are forced into expensive, overly complex genealogical platforms. Simple drawing tools lack the structured data needed to map complex relationships, and single-player applications make it difficult for multiple relatives to contribute their shared history.',
    solution: 'Kinfolk bridges the gap by providing a dedicated, structured environment for family mapping without the bloat. It combines a highly interactive, drag-and-drop canvas with real-time multiplayer capabilities, allowing families to piece together their history collaboratively with instant synchronization across active sessions.',
    features: [
      'Visual Canvas: An infinite, interactive node-based canvas for mapping out complex family structures, relationships, and generations.',
      'Real-Time Collaboration: Multiplayer editing powered by WebSockets. Multiple family members can view and edit the tree simultaneously with instant state synchronization.',
      'Smart Layout Engine: Automated, conflict-free node positioning and routing so your tree remains organized and readable as it grows.',
      'Resilient Architecture: Fail-open offline handling and optimistic UI updates ensure a smooth experience even under poor network conditions.',
      'Secure Cloud Storage: Persistent, secure data storage with robust user authentication and permission controls.'
    ],
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Shadcn UI', 'React Flow', 'Dagre', 'PostgreSQL', 'Supabase', 'Supabase Auth', 'Supabase Realtime', 'Vercel']
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
    overview: 'Online Wardrobe is a web application designed to help users digitize their physical clothing collection, receive AI-driven styling feedback, and schedule their daily outfits. The application features a bold neobrutalist design theme and includes a local preview/onboarding mode that lets users test the features using mock items before setting up a database connection.',
    problem: 'Keeping track of a large physical wardrobe is difficult, leading to unused clothing and repetitive outfits. Existing digital closet apps suffer from a high entry barrier for uploading metadata manually, a lack of matching inspiration for existing clothes, and disorganized outfit scheduling without weather references.',
    solution: 'Online Wardrobe simplifies this workflow by combining automated cataloging with an interactive style canvas. It integrates Google\'s Gemini API to analyze garment photos (color, fabric, category), presents a drag-and-drop outfit critique builder, and links looks to a weekly weather calendar planner.',
    features: [
      'Local & Cloud Modes: Users can run the app locally using mock items to try out features, or connect their personal Supabase backend for persistent user accounts and database storage.',
      'Automatic Item Scanning: Extracts garment metadata (color, fabric, category) directly from images using AI.',
      'AI Curated Outfit Generator: Recommends complete combinations (tops, bottoms, footwear, accessories) based on occasion presets and weather types.',
      'Style Critique Panel: Evaluates manual outfit combinations, outputs a 1–10 fashion rating, and details why items work or do not work together.',
      'Suggest Alternatives: If a combination has a low score, the app queries the user\'s digitized closet to find and recommend better matching alternatives.',
      'Weekly Style Calendar: Schedules outfits for the week and displays weather warnings.',
      'Interactive Guide Tour: A step-by-step walkthrough utilizing custom CSS box-shadow spotlight masks, interaction lock overlays, and a custom HTML5 canvas confetti celebration modal upon completion.'
    ],
    tech: ['React 18', 'TypeScript', 'Zustand', 'Tailwind CSS v4', 'Supabase', 'Google Gemini API', 'React Router DOM v6', 'Lucide React', 'Framer Motion', 'Vite']
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
