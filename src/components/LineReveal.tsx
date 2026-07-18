import React, { useRef, useEffect, useState, useMemo } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface LineRevealProps {
  text: string
  className?: string
  style?: React.CSSProperties
}

const LineRevealComponent: React.FC<LineRevealProps> = ({ text, className = '', style }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [lines, setLines] = useState<string[][]>([])

  // Initial render: split text into words so we can measure their offsets
  const words = useMemo(() => text.split(' '), [text])

  useEffect(() => {
    const computeLines = () => {
      if (!containerRef.current) return
      
      // Temporarily render all words as raw inline spans to measure their offsets
      const wordElements = containerRef.current.querySelectorAll('.measure-word')
      if (wordElements.length === 0) return

      const linesMap: { [key: number]: string[] } = {}
      
      wordElements.forEach((el) => {
        const htmlEl = el as HTMLElement
        // Round offsetTop to avoid subpixel rounding discrepancies
        const top = Math.round(htmlEl.offsetTop)
        if (!linesMap[top]) {
          linesMap[top] = []
        }
        linesMap[top].push(htmlEl.innerText)
      })

      // Sort offsets to construct lines in correct order
      const sortedOffsets = Object.keys(linesMap)
        .map(Number)
        .sort((a, b) => a - b)
        
      const computedLines = sortedOffsets.map((offset) => linesMap[offset])
      setLines(computedLines)
    }

    // Run computation
    computeLines()

    // Recompute on window resize to handle responsiveness (debounced)
    let resizeTimer: ReturnType<typeof setTimeout>
    const handleResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(computeLines, 100)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(resizeTimer)
    }
  }, [text])

  useGSAP(() => {
    if (lines.length === 0 || !containerRef.current) return

    const lineElements = containerRef.current.querySelectorAll('.reveal-line-inner')
    
    // Kill existing scroll triggers for this container to avoid overlap
    ScrollTrigger.getAll().forEach((trigger) => {
      if (trigger.vars.trigger === containerRef.current) {
        trigger.kill()
      }
    })

    gsap.fromTo(lineElements,
      {
        yPercent: 120,
      },
      {
        yPercent: 0,
        stagger: 0.1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: true,
          start: "top 90%",
          end: "bottom 60%",
        }
      }
    )
  }, [lines])

  // If lines are not computed yet, render words inline for measurement
  if (lines.length === 0) {
    return (
      <div
        ref={containerRef}
        className={className}
        style={{ ...style, opacity: 0 }}
      >
        {words.map((word, index) => (
          <span key={index} className="measure-word inline-block mr-[0.25em]">
            {word}
          </span>
        ))}
      </div>
    )
  }

  // Once lines are computed, render them wrapped in mask containers
  return (
    <div
      ref={containerRef}
      className={className}
      style={{ ...style }}
    >
      {lines.map((lineWords, lineIndex) => (
        <div 
          key={lineIndex} 
          className="reveal-line-mask" 
          style={{ overflow: 'hidden', display: 'block' }}
        >
          <span 
            className="reveal-line-inner inline-block" 
            style={{ display: 'block', willChange: 'transform' }}
          >
            {lineWords.join(' ')}
          </span>
        </div>
      ))}
    </div>
  )
}

const LineReveal = React.memo(LineRevealComponent)
export default LineReveal
