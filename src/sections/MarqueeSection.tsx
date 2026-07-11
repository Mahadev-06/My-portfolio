import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

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
    icon: (
      <svg viewBox="0 0 100 100" fill="none" className="w-12 h-12">
        <defs>
          <filter id="glow-react" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <radialGradient id="grad-react-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#61DAFB" />
            <stop offset="100%" stopColor="#0088cc" />
          </radialGradient>
        </defs>
        {/* Glowing orbit paths scaled down to fit within card boundaries */}
        <ellipse cx="50" cy="50" rx="30" ry="11" stroke="#61DAFB" strokeWidth="3.5" transform="rotate(0 50 50)" filter="url(#glow-react)" opacity="0.8" />
        <ellipse cx="50" cy="50" rx="30" ry="11" stroke="#61DAFB" strokeWidth="3.5" transform="rotate(60 50 50)" filter="url(#glow-react)" opacity="0.8" />
        <ellipse cx="50" cy="50" rx="30" ry="11" stroke="#61DAFB" strokeWidth="3.5" transform="rotate(120 50 50)" filter="url(#glow-react)" opacity="0.8" />
        {/* 3D central sphere */}
        <circle cx="50" cy="50" r="7" fill="url(#grad-react-core)" filter="url(#glow-react)" />
      </svg>
    ),
  },
  {
    name: 'Node JS',
    category: 'Backend Runtime',
    tagline: 'Scalable server-side applications and RESTful APIs.',
    color: '#339933',
    icon: (
      <svg viewBox="0 0 100 100" fill="none" className="w-12 h-12">
        <defs>
          <linearGradient id="node-top" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8CC84A" />
            <stop offset="100%" stopColor="#76B33B" />
          </linearGradient>
          <linearGradient id="node-left" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#5FA139" />
            <stop offset="100%" stopColor="#438224" />
          </linearGradient>
          <linearGradient id="node-right" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3E721D" />
            <stop offset="100%" stopColor="#294F12" />
          </linearGradient>
        </defs>
        {/* 3D Isometric Cube for Node */}
        {/* Top Face */}
        <polygon points="50,15 80,32 50,49 20,32" fill="url(#node-top)" />
        {/* Left Face */}
        <polygon points="20,32 50,49 50,83 20,66" fill="url(#node-left)" />
        {/* Right Face */}
        <polygon points="50,49 80,32 80,66 50,83" fill="url(#node-right)" />
      </svg>
    ),
  },
  {
    name: 'Python',
    category: 'Programming Language',
    tagline: 'Backend systems, scripting, AI/ML, and automation workflows.',
    color: '#3776AB',
    icon: (
      <svg viewBox="0 0 100 100" fill="none" className="w-12 h-12">
        <defs>
          <linearGradient id="py-blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3776AB" />
            <stop offset="100%" stopColor="#1E466A" />
          </linearGradient>
          <linearGradient id="py-yellow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD43B" />
            <stop offset="100%" stopColor="#D9A814" />
          </linearGradient>
          <filter id="py-shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.4" />
          </filter>
        </defs>
        {/* Interlocking 3D rounded snakes */}
        {/* Blue snake */}
        <path d="M50 10 C32 10 28 17 28 26 L28 36 L50 36 L50 40 L22 40 C13 40 10 45 10 58 C10 71 16 74 24 74 L32 74 L32 64 C32 52 41 46 52 46 L72 46 L72 36 C72 20 66 10 50 10 Z" fill="url(#py-blue)" filter="url(#py-shadow)" />
        {/* Yellow snake */}
        <path d="M50 90 C68 90 72 83 72 74 L72 64 L50 64 L50 60 L78 60 C87 60 90 55 90 42 C90 29 84 26 76 26 L68 26 L68 36 C68 48 59 54 48 54 L28 54 L28 64 C28 80 34 90 50 90 Z" fill="url(#py-yellow)" filter="url(#py-shadow)" />
        {/* Eyes */}
        <circle cx="38" cy="22" r="3" fill="#ffffff" />
        <circle cx="62" cy="78" r="3" fill="#ffffff" />
      </svg>
    ),
  },
  {
    name: 'Java',
    category: 'Programming Language',
    tagline: 'Robust object-oriented programming for enterprise backends.',
    color: '#F89820',
    icon: (
      <svg viewBox="0 0 100 100" fill="none" className="w-12 h-12">
        <defs>
          <linearGradient id="cup-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5382A1" />
            <stop offset="100%" stopColor="#142B3B" />
          </linearGradient>
          <linearGradient id="steam-grad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#F89820" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FF4500" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* 3D coffee cup */}
        <ellipse cx="50" cy="50" rx="22" ry="8" fill="#142B3B" stroke="#5382A1" strokeWidth="2" />
        <path d="M28 50 C28 65 35 78 50 78 C65 78 72 65 72 50 Z" fill="url(#cup-grad)" />
        {/* Handle */}
        <path d="M70 52 C80 52 82 62 70 66" stroke="#5382A1" strokeWidth="5" strokeLinecap="round" />
        {/* Steam */}
        <path d="M42 38 Q46 25 38 15 Q45 25 45 38" stroke="url(#steam-grad)" strokeWidth="4" strokeLinecap="round" />
        <path d="M52 38 Q56 20 48 10 Q55 20 55 38" stroke="url(#steam-grad)" strokeWidth="4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'C',
    category: 'Programming Language',
    tagline: 'Low-level software development, systems, and structures.',
    color: '#A8B9CC',
    icon: (
      <svg viewBox="0 0 100 100" fill="none" className="w-12 h-12">
        <defs>
          <linearGradient id="c-front" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#659AD2" />
            <stop offset="100%" stopColor="#3B6F9A" />
          </linearGradient>
          <linearGradient id="c-side" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2A5171" />
            <stop offset="100%" stopColor="#1B344A" />
          </linearGradient>
        </defs>
        {/* 3D blocky letter C */}
        {/* Side/Depth extrusion */}
        <path d="M72 38 C62 26 37 26 27 41 C17 56 22 82 47 82 C65 82 72 70 72 70 L64 64 C64 64 58 74 46 74 C34 74 30 55 36 46 C42 37 58 36 64 46 Z" fill="url(#c-side)" />
        {/* Front Face with offset */}
        <path d="M70 35 C60 23 35 23 25 38 C15 53 20 79 45 79 C63 79 70 67 70 67 L62 61 C62 61 56 71 44 71 C32 71 28 52 34 43 C40 34 56 33 62 43 Z" fill="url(#c-front)" />
      </svg>
    ),
  },
  {
    name: 'SQL',
    category: 'Database Querying',
    tagline: 'Relational data structures, queries, and optimizations.',
    color: '#00BCF2',
    icon: (
      <svg viewBox="0 0 100 100" fill="none" className="w-12 h-12">
        <defs>
          <linearGradient id="db-top" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00BCF2" />
            <stop offset="100%" stopColor="#0080B0" />
          </linearGradient>
          <linearGradient id="db-side" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0090C0" />
            <stop offset="100%" stopColor="#005070" />
          </linearGradient>
        </defs>
        {/* 3D Database Cylinders */}
        {/* Cylinder 1 (Bottom) */}
        <path d="M20 55 L20 75 C20 85 80 85 80 75 L80 55 C80 65 20 65 20 55 Z" fill="url(#db-side)" />
        <ellipse cx="50" cy="55" rx="30" ry="10" fill="url(#db-top)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />

        {/* Cylinder 2 (Top) */}
        <path d="M20 25 L20 45 C20 55 80 55 80 45 L80 25 C80 35 20 35 20 25 Z" fill="url(#db-side)" />
        <ellipse cx="50" cy="25" rx="30" ry="10" fill="url(#db-top)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      </svg>
    ),
  },
  {
    name: 'HTML',
    category: 'Web Structure',
    tagline: 'Semantic elements and standard document structuring.',
    color: '#E34F26',
    icon: (
      <svg viewBox="0 0 100 100" fill="none" className="w-12 h-12">
        <defs>
          <linearGradient id="html-front" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E34F26" />
            <stop offset="100%" stopColor="#B02C06" />
          </linearGradient>
          <linearGradient id="html-side" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B02C06" />
            <stop offset="100%" stopColor="#781A00" />
          </linearGradient>
        </defs>
        {/* 3D bevel styled Tag Bracket "<" */}
        <path d="M42 20 L15 48 L42 76 L48 70 L27 48 L48 26 Z" fill="url(#html-side)" />
        <path d="M40 18 L13 46 L40 74 L46 68 L25 46 L46 24 Z" fill="url(#html-front)" />
        {/* 3D bevel styled Tag Bracket ">" */}
        <path d="M58 20 L85 48 L58 76 L52 70 L73 48 L52 26 Z" fill="url(#html-side)" />
        <path d="M60 18 L87 46 L60 74 L54 68 L75 46 L54 24 Z" fill="url(#html-front)" />
      </svg>
    ),
  },
  {
    name: 'CSS',
    category: 'Styling & Design',
    tagline: 'Modern layout grids, flexboxes, styling, and transitions.',
    color: '#1572B6',
    icon: (
      <svg viewBox="0 0 100 100" fill="none" className="w-12 h-12">
        <defs>
          <linearGradient id="css-left" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#29abe2" />
            <stop offset="100%" stopColor="#1572B6" />
          </linearGradient>
          <linearGradient id="css-right" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1572B6" />
            <stop offset="100%" stopColor="#0B4C7B" />
          </linearGradient>
        </defs>
        {/* 3D Beveled Shield */}
        {/* Left Side */}
        <path d="M50 15 L20 22 L28 72 L50 82 Z" fill="url(#css-left)" />
        {/* Right Side */}
        <path d="M50 15 L80 22 L72 72 L50 82 Z" fill="url(#css-right)" />
        {/* Highlight Center Line */}
        <path d="M50 15 L50 82" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: 'JavaScript',
    category: 'Web Logic',
    tagline: 'Dynamic logic, event handling, and core web scripting.',
    color: '#F7DF1E',
    icon: (
      <svg viewBox="0 0 100 100" fill="none" className="w-12 h-12">
        <defs>
          <linearGradient id="js-top" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F7DF1E" />
            <stop offset="100%" stopColor="#E5C710" />
          </linearGradient>
          <linearGradient id="js-side" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#C9AA08" />
            <stop offset="100%" stopColor="#967E00" />
          </linearGradient>
        </defs>
        {/* 3D Isometric Tile */}
        <polygon points="50,15 85,32 50,49 15,32" fill="url(#js-top)" />
        <polygon points="15,32 50,49 50,65 15,48" fill="url(#js-side)" />
        <polygon points="50,49 85,32 85,48 50,65" fill="url(#js-side)" opacity="0.8" />
        {/* JS label placed on 3D plane */}
        <text x="50" y="38" fill="#0C0C0C" fontSize="16" fontWeight="900" fontFamily="Kanit, sans-serif" textAnchor="middle" transform="skewX(-25) rotate(-5) scale(1, 0.8)">JS</text>
      </svg>
    ),
  },

  // Row 2 Skills
  {
    name: 'Git',
    category: 'Version Control',
    tagline: 'Distributed revision control and branch workflows.',
    color: '#F05032',
    icon: (
      <svg viewBox="0 0 100 100" fill="none" className="w-12 h-12">
        <defs>
          <radialGradient id="git-sphere" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#FF8B76" />
            <stop offset="60%" stopColor="#F05032" />
            <stop offset="100%" stopColor="#9A220C" />
          </radialGradient>
        </defs>
        {/* 3D spheres branching */}
        <path d="M50 25 L50 75" stroke="#F05032" strokeWidth="6" strokeLinecap="round" />
        <path d="M30 55 C30 40 50 40 50 40" stroke="#F05032" strokeWidth="6" strokeLinecap="round" />
        {/* 3D spheres */}
        <circle cx="50" cy="25" r="9" fill="url(#git-sphere)" />
        <circle cx="30" cy="55" r="9" fill="url(#git-sphere)" />
        <circle cx="50" cy="75" r="9" fill="url(#git-sphere)" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    category: 'Collaboration Platforms',
    tagline: 'Hosting developer repositories and coordinating team tasks.',
    color: '#E6E6E6',
    icon: (
      <svg viewBox="0 0 100 100" fill="none" className="w-12 h-12">
        <defs>
          <linearGradient id="git-metal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#A6A6A6" />
            <stop offset="100%" stopColor="#595959" />
          </linearGradient>
          <filter id="git-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        {/* Metallic GitHub icon with drop shadow */}
        <path d="M50 15 C30 15 15 30 15 50 C15 65 25 78 40 83 C41 83 42 83 42 82 L42 75 C32 77 30 70 30 70 C28 66 25 65 25 65 C22 63 25 63 25 63 C28 64 30 68 30 68 C32 72 38 71 40 70 C40 67 41 65 42 64 C30 63 25 58 25 45 C25 41 27 38 29 35 C28 34 27 30 29 25 C29 25 32 25 38 30 C41 29 45 28 50 28 C55 28 59 29 62 30 C68 25 71 25 71 25 C73 30 72 34 71 35 C73 38 75 41 75 45 C75 58 70 63 58 64 C59 65 60 68 60 72 L60 82 C60 83 61 83 62 83 C77 78 85 65 85 50 C85 30 70 15 50 15 Z" fill="url(#git-metal)" filter="url(#git-glow)" />
      </svg>
    ),
  },
  {
    name: 'Supabase',
    category: 'Backend-as-a-Service',
    tagline: 'Open-source Postgres database, instant APIs, and web sockets.',
    color: '#3ECF8E',
    icon: (
      <svg viewBox="0 0 100 100" fill="none" className="w-12 h-12">
        <defs>
          <linearGradient id="sb-light" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3ECF8E" />
            <stop offset="100%" stopColor="#248F5D" />
          </linearGradient>
          <linearGradient id="sb-dark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#248F5D" />
            <stop offset="100%" stopColor="#0B5231" />
          </linearGradient>
          <filter id="sb-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="3" dy="5" stdDeviation="3" floodColor="#3ECF8E" floodOpacity="0.3" />
          </filter>
        </defs>
        {/* 3D beveled lightning bolt */}
        <polygon points="52,10 20,53 48,53 45,90 45,55 52,55" fill="url(#sb-light)" filter="url(#sb-shadow)" />
        <polygon points="45,90 80,47 52,47 52,55 45,55" fill="url(#sb-dark)" filter="url(#sb-shadow)" />
      </svg>
    ),
  },
  {
    name: 'Firebase',
    category: 'Backend-as-a-Service',
    tagline: 'Serverless databases, auth models, and quick web hosting.',
    color: '#FFCA28',
    icon: (
      <svg viewBox="0 0 600 600" className="w-12 h-12">
        <path fill="#FF9100" d="M213.918 560.499c23.248 9.357 48.469 14.909 74.952 15.834 35.84 1.252 69.922-6.158 100.391-20.234-36.537-14.355-69.627-35.348-97.869-61.448-18.306 29.31-45.382 52.462-77.474 65.848Z"/>
        <path fill="#FFC400" d="M291.389 494.66c-64.466-59.622-103.574-145.917-100.269-240.568.108-3.073.27-6.145.46-9.216a166.993 166.993 0 0 0-36.004-5.241 167.001 167.001 0 0 0-51.183 6.153c-17.21 30.145-27.594 64.733-28.888 101.781-3.339 95.611 54.522 179.154 138.409 212.939 32.093-13.387 59.168-36.51 77.475-65.848Z"/>
        <path fill="#FF9100" d="M291.39 494.657c14.988-23.986 24.075-52.106 25.133-82.403 2.783-79.695-50.792-148.251-124.942-167.381-.19 3.071-.352 6.143-.46 9.216-3.305 94.651 35.803 180.946 100.269 240.568Z"/>
        <path fill="#DD2C00" d="M308.231 20.858C266 54.691 232.652 99.302 212.475 150.693c-11.551 29.436-18.81 61.055-20.929 94.2 74.15 19.13 127.726 87.686 124.943 167.38-1.058 30.297-10.172 58.39-25.134 82.404 28.24 26.127 61.331 47.093 97.868 61.447 73.337-33.9 125.37-106.846 128.383-193.127 1.952-55.901-19.526-105.724-49.875-147.778-32.051-44.477-159.5-194.36-159.5-194.36Z"/>
      </svg>
    ),
  },
  {
    name: 'Vercel',
    category: 'Hosting & Deployment',
    tagline: 'Optimized cloud deployment platform for frontend frameworks.',
    color: '#FFFFFF',
    icon: (
      <svg viewBox="0 0 100 100" fill="none" className="w-12 h-12">
        <defs>
          <linearGradient id="v-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#7F7F7F" />
          </linearGradient>
          <linearGradient id="v-side" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4A4A4A" />
            <stop offset="100%" stopColor="#1A1A1A" />
          </linearGradient>
        </defs>
        {/* 3D Triangular Prism */}
        <polygon points="50,15 90,75 50,82" fill="url(#v-grad)" />
        <polygon points="50,82 90,75 90,85 50,92" fill="url(#v-side)" />
        <polygon points="10,75 50,15 50,82" fill="url(#v-grad)" opacity="0.9" />
        <polygon points="10,75 50,82 50,92 10,85" fill="url(#v-side)" />
      </svg>
    ),
  },
  {
    name: 'Sentry',
    category: 'Monitoring Tools',
    tagline: 'Real-time code debugging, error tracking, and performance monitoring.',
    color: '#FB4226',
    icon: (
      <svg viewBox="0 0 100 100" fill="none" className="w-12 h-12">
        <defs>
          <linearGradient id="sentry-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FB4226" />
            <stop offset="100%" stopColor="#B31A05" />
          </linearGradient>
          <filter id="sentry-glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        {/* 3D target ring (beveled) */}
        <circle cx="50" cy="50" r="30" stroke="url(#sentry-grad)" strokeWidth="8" filter="url(#sentry-glow)" />
        <circle cx="50" cy="50" r="10" fill="url(#sentry-grad)" />
        <path d="M50 10 L50 22 M50 78 L50 90 M10 50 L22 50 M78 50 L90 50" stroke="url(#sentry-grad)" strokeWidth="6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Framer',
    category: 'Animation Library',
    tagline: 'Fluid 3D spring layouts and high-performance interactive motion.',
    color: '#0055FF',
    icon: (
      <svg viewBox="0 0 100 100" fill="none" className="w-12 h-12">
        <defs>
          <linearGradient id="framer-grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00A2FF" />
            <stop offset="100%" stopColor="#0055FF" />
          </linearGradient>
          <linearGradient id="framer-grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7F00FF" />
            <stop offset="100%" stopColor="#FF007F" />
          </linearGradient>
        </defs>
        {/* 3D layered glass sheets */}
        <polygon points="20,15 80,15 50,45" fill="url(#framer-grad1)" fillOpacity="0.85" />
        <polygon points="50,45 80,45 80,75 50,75" fill="url(#framer-grad2)" fillOpacity="0.85" />
        <polygon points="50,75 20,45 50,45" fill="url(#framer-grad1)" fillOpacity="0.75" />
      </svg>
    ),
  },
  {
    name: 'Dribbble',
    category: 'Design Inspiration',
    tagline: 'Visualizing layout mockups, branding styles, and creative concepts.',
    color: '#EA4C89',
    icon: (
      <svg viewBox="0 0 100 100" fill="none" className="w-12 h-12">
        <defs>
          <radialGradient id="dribbble-ball" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#FF7EB3" />
            <stop offset="70%" stopColor="#EA4C89" />
            <stop offset="100%" stopColor="#A11B52" />
          </radialGradient>
        </defs>
        {/* 3D Sphere basketball */}
        <circle cx="50" cy="50" r="38" fill="url(#dribbble-ball)" />
        <path d="M22 35 C40 45 60 30 78 35" stroke="rgba(0,0,0,0.25)" strokeWidth="3" />
        <path d="M30 75 C45 55 55 55 70 78" stroke="rgba(0,0,0,0.25)" strokeWidth="3" />
        <path d="M50 12 C45 35 30 50 15 62" stroke="rgba(0,0,0,0.25)" strokeWidth="3" />
      </svg>
    ),
  },
]

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <div
      className="w-[240px] h-[80px] rounded-2xl flex items-center gap-4 px-5 py-4 flex-shrink-0 relative overflow-hidden transition-colors duration-300 border border-[#D7E2EA]/10 group hover:border-[#D7E2EA]/25 font-kanit"
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
        className="transition-transform duration-500 group-hover:scale-110 flex-shrink-0 flex items-center justify-center z-10 w-12 h-12"
      >
        {skill.icon}
      </div>

      {/* Name */}
      <div className="flex flex-col z-10">
        <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-white font-kanit leading-none">
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

    gsap.fromTo(row1, { x: -300 }, { x: 300, ease: 'none', force3D: true, scrollTrigger })
    gsap.fromTo(row2, { x: 300 }, { x: -300, ease: 'none', force3D: true, scrollTrigger })
  }, { scope: sectionRef })

  const row1Skills = SKILLS.slice(0, 9)
  const row2Skills = SKILLS.slice(9)

  const tripled1 = [...row1Skills, ...row1Skills, ...row1Skills]
  const tripled2 = [...row2Skills, ...row2Skills, ...row2Skills]

  return (
    <section
      ref={sectionRef}
      className="py-32 overflow-hidden select-none"
      style={{ 
        background: '#0C0C0C',
        transform: 'rotate(-3deg) scale(1.05)',
      }}
    >
      {/* Row 1 - moves RIGHT */}
      <div 
        ref={row1Ref}
        className="flex gap-5 mb-5" 
        style={{ transform: `translate3d(-300px, 0px, 0px)`, willChange: 'transform' }}
      >
        {tripled1.map((skill, i) => (
          <SkillCard key={`r1-${skill.name}-${i}`} skill={skill} />
        ))}
      </div>

      {/* Row 2 - moves LEFT */}
      <div 
        ref={row2Ref}
        className="flex gap-5" 
        style={{ transform: `translate3d(300px, 0px, 0px)`, willChange: 'transform' }}
      >
        {tripled2.map((skill, i) => (
          <SkillCard key={`r2-${skill.name}-${i}`} skill={skill} />
        ))}
      </div>
    </section>
  )
}

export default MarqueeSection
