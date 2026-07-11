import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

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

interface ExpertiseItemProps {
  number: string
  name: string
  description: string
  isFirst: boolean
  index: number
}

const ExpertiseItem: React.FC<ExpertiseItemProps> = ({ number, name, description, isFirst, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <div ref={ref} className="relative py-8 sm:py-10 md:py-12 flex items-start gap-6 sm:gap-8 md:gap-12 overflow-hidden">
      {/* Top Border Line Animation for the first item */}
      {isFirst && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.1 }}
          className="absolute top-0 left-0 right-0 h-[1px] bg-black/15 origin-left"
        />
      )}

      {/* Number */}
      <motion.span
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.15 }}
        className="font-black text-[#0C0C0C] flex-shrink-0"
        style={{ fontSize: 'clamp(3rem, 10vw, 140px)', lineHeight: 1 }}
      >
        {number}
      </motion.span>

      {/* Text Content */}
      <div className="flex flex-col gap-2 pt-2 sm:pt-4 md:pt-6">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.15 + 0.1 }}
          className="font-medium uppercase text-[#0C0C0C]"
          style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
        >
          {name}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 0.6, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.15 + 0.2 }}
          className="font-light leading-relaxed max-w-2xl text-[#0C0C0C]"
          style={{
            fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
          }}
        >
          {description}
        </motion.p>
      </div>

      {/* Bottom Border Line Animation */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.1 + 0.15 }}
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-black/15 origin-left"
      />
    </div>
  )
}

const ExpertiseSection: React.FC = () => {
  const headingRef = useRef(null)
  const isHeadingInView = useInView(headingRef, { once: true, margin: '-10%' })

  return (
    <section
      id="expertise"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: '#FFFFFF' }}
    >
      <div ref={headingRef}>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-black uppercase text-center text-[#0C0C0C] mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Expertise
        </motion.h2>
      </div>

      <div className="max-w-5xl mx-auto">
        {EXPERTISE.map((item, i) => (
          <ExpertiseItem
            key={item.number}
            number={item.number}
            name={item.name}
            description={item.description}
            isFirst={i === 0}
            index={i}
          />
        ))}
      </div>
    </section>
  )
}

export default ExpertiseSection
