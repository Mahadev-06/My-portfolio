import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface SplitTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  style?: React.CSSProperties
}

const SplitText: React.FC<SplitTextProps> = ({ text, className = '', delay = 0, duration = 0.6, style }) => {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })
  const words = text.split(' ')

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.012,
        delayChildren: delay,
      },
    },
  }

  const childVariants = {
    hidden: {
      opacity: 0,
      y: '20%',
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration,
        ease: [0.215, 0.610, 0.355, 1] as any, // easeOutCubic
      },
    },
  }

  return (
    <motion.span
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={`inline-block ${className}`}
      style={style}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em]">
          {word.split('').map((char, charIndex) => (
            <motion.span
              key={charIndex}
              variants={childVariants}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.span>
  )
}

export default SplitText
