import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface TextRevealProps {
  text: string
  className?: string
  style?: React.CSSProperties
}

const TextReveal: React.FC<TextRevealProps> = ({ text, className = '', style }) => {
  const containerRef = useRef<HTMLHeadingElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    const chars = containerRef.current.querySelectorAll('.reveal-char')
    
    gsap.fromTo(chars,
      {
        opacity: 0,
        scale: 0,
        y: 80,
        rotationX: 180,
        transformOrigin: "0% 50% -50px",
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        rotationX: 0,
        transformOrigin: "0% 50% -50px",
        duration: 1,
        ease: "back.out(1.5)",
        stagger: 0.04,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    )
  }, { scope: containerRef })

  // Split text into words, and words into characters
  const words = text.split(' ')

  return (
    <h2
      ref={containerRef}
      className={`hero-heading font-black uppercase text-center leading-none tracking-tight select-none ${className}`}
      style={{
        ...style,
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
      aria-label={text}
    >
      {words.map((word, wordIndex) => (
        <span 
          key={wordIndex} 
          className="inline-block whitespace-nowrap"
          style={{ transformStyle: 'preserve-3d' }}
          aria-hidden="true"
        >
          {word.split('').map((char, charIndex) => (
            <span
              key={charIndex}
              className="reveal-char inline-block"
              style={{
                transformStyle: 'preserve-3d',
                willChange: 'transform, opacity',
                display: 'inline-block',
              }}
            >
              {char}
            </span>
          ))}
          {/* Add space between words */}
          {wordIndex < words.length - 1 && (
            <span className="inline-block" aria-hidden="true">
              &nbsp;
            </span>
          )}
        </span>
      ))}
    </h2>
  )
}

export default TextReveal
