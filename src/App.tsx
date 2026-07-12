import React, { useEffect } from 'react'
import HeroSection from './sections/HeroSection'
import MarqueeSection from './sections/MarqueeSection'
import AboutSection from './sections/AboutSection'
import ExpertiseSection from './sections/ExpertiseSection'
import ProjectsSection from './sections/ProjectsSection'
import ContactSection from './sections/ContactSection'
import FooterSection from './sections/FooterSection'
import { ReactLenis, useLenis } from 'lenis/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Prevent address bar resize jumping on mobile devices
ScrollTrigger.config({
  ignoreMobileResize: true,
})

const ScrollSync: React.FC = () => {
  const lenis = useLenis()

  useEffect(() => {
    if (!lenis) return

    const handleScroll = () => {
      ScrollTrigger.update()
    }

    lenis.on('scroll', handleScroll)

    // Sync GSAP animation loop with Lenis
    const syncTicker = (time: number) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(syncTicker)
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.off('scroll', handleScroll)
      gsap.ticker.remove(syncTicker)
    }
  }, [lenis])

  return null
}

function App() {
  return (
    <ReactLenis root options={{ smoothWheel: true, duration: 1.2 }}>
      <ScrollSync />
      <div style={{ background: '#0C0C0C', overflowX: 'clip' }} className="font-kanit">
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ExpertiseSection />
        <ProjectsSection />
        <ContactSection />
        <FooterSection />
      </div>
    </ReactLenis>
  )
}

export default App
