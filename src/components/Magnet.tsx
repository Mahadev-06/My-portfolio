import React, { useRef, useCallback } from 'react'

interface MagnetProps {
  children: React.ReactNode
  padding?: number
  strength?: number
  activeTransition?: string
  inactiveTransition?: string
  className?: string
  style?: React.CSSProperties
}

const MagnetComponent: React.FC<MagnetProps> = ({
  children,
  padding = 100,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className = '',
  style,
}) => {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const distX = e.clientX - centerX
      const distY = e.clientY - centerY
      const distance = Math.sqrt(distX * distX + distY * distY)
      const maxDist = Math.max(rect.width, rect.height) / 2 + padding

      if (distance < maxDist) {
        el.style.transform = `translate3d(${distX / strength}px, ${distY / strength}px, 0)`
        el.style.transition = activeTransition
      } else {
        el.style.transform = 'translate3d(0, 0, 0)'
        el.style.transition = inactiveTransition
      }
    },
    [padding, strength, activeTransition, inactiveTransition]
  )

  const handleMouseLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'translate3d(0, 0, 0)'
    el.style.transition = inactiveTransition
  }, [inactiveTransition])

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        ...style,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  )
}

const Magnet = React.memo(MagnetComponent)
export default Magnet
