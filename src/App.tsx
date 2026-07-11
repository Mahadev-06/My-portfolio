import HeroSection from './sections/HeroSection'
import MarqueeSection from './sections/MarqueeSection'
import AboutSection from './sections/AboutSection'
import ExpertiseSection from './sections/ExpertiseSection'
import ProjectsSection from './sections/ProjectsSection'
import ContactSection from './sections/ContactSection'
import FooterSection from './sections/FooterSection'
import { ReactLenis } from 'lenis/react'

function App() {
  return (
    <ReactLenis root options={{ smoothWheel: true, duration: 1.2 }}>
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
