import React, { useRef, useMemo } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

interface AnimatedTextProps {
  text: string
  className?: string
  style?: React.CSSProperties
}

const AnimatedTextComponent: React.FC<AnimatedTextProps> = ({ text, className = '', style }) => {
  const containerRef = useRef<HTMLParagraphElement>(null)

  useGSAP(() => {
    const chars = containerRef.current?.querySelectorAll('.animated-char')
    if (chars && chars.length > 0) {
      gsap.fromTo(
        chars,
        { opacity: 0.15 },
        {
          opacity: 1,
          stagger: 0.02,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current?.closest('section'),
            start: 'top top',
            end: '+=100%',
            scrub: true,
          },
        }
      )
    }
  }, { scope: containerRef })

  const words = useMemo(() => text.split(' '), [text])

  return (
    <p ref={containerRef} className={`text-center ${className}`} style={style}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em]">
          {word.split('').map((char, charIndex) => (
            <span
              key={charIndex}
              className="animated-char inline-block"
              style={{ opacity: 0.15 }}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </p>
  )
}

const AnimatedText = React.memo(AnimatedTextComponent)
export default AnimatedText
