import React, { useRef } from 'react'
import FadeIn from '../components/FadeIn'
import AnimatedText from '../components/AnimatedText'
import ContactButton from '../components/ContactButton'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const DECORATIVE_IMAGES = [
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
    alt: 'Moon icon',
    className: 'w-[60px] sm:w-[120px] md:w-[210px] absolute top-[2%] left-[1%] sm:left-[2%] md:left-[4%] opacity-30 sm:opacity-100',
    fadeProps: { delay: 0.1, x: -80, y: 0, duration: 0.9 },
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png',
    alt: '3D object',
    className: 'w-[50px] sm:w-[100px] md:w-[180px] absolute bottom-[4%] left-[2%] sm:left-[6%] md:left-[10%] opacity-30 sm:opacity-100',
    fadeProps: { delay: 0.25, x: -80, y: 0, duration: 0.9 },
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
    alt: 'Lego icon',
    className: 'w-[60px] sm:w-[120px] md:w-[210px] absolute top-[2%] right-[1%] sm:right-[2%] md:right-[4%] opacity-30 sm:opacity-100',
    fadeProps: { delay: 0.15, x: 80, y: 0, duration: 0.9 },
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',
    alt: '3D group',
    className: 'w-[65px] sm:w-[130px] md:w-[220px] absolute bottom-[4%] right-[2%] sm:right-[6%] md:right-[10%] opacity-30 sm:opacity-100',
    fadeProps: { delay: 0.3, x: 80, y: 0, duration: 0.9 },
  },
]

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: '+=100%',
      pin: true,
      scrub: true,
      pinSpacing: true,
      invalidateOnRefresh: true,
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} id="about" className="relative h-screen flex items-center justify-center px-5 sm:px-8 md:px-10 py-12 bg-[#0C0C0C] overflow-hidden">
      {/* Decorative images */}
      {DECORATIVE_IMAGES.map((img, i) => (
        <FadeIn key={i} {...img.fadeProps} className={img.className}>
          <img src={img.src} alt={img.alt} className="w-full" />
        </FadeIn>
      ))}

      {/* Center content */}
      <div className="flex flex-col items-center max-w-[900px] w-full z-10">
        <div className="flex flex-col items-center gap-6 sm:gap-14 md:gap-16 w-full">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight text-center"
              style={{ fontSize: 'clamp(2.5rem, 12vw, 160px)' }}
            >
              About me
            </h2>
          </FadeIn>

          <AnimatedText
            text="I build modern, scalable web applications that combine clean design with robust functionality. Passionate about full-stack development, I leverage modern technologies and AI-assisted workflows to transform ideas into impactful digital products while continuously learning Python, Artificial Intelligence, and Machine Learning."
            className="text-[#D7E2EA] font-medium text-center leading-relaxed w-full"
            style={{ fontSize: 'clamp(0.9rem, 2.2vw, 1.8rem)', lineHeight: 1.4 }}
          />
        </div>

        <div className="mt-8 sm:mt-20 md:mt-24">
          <FadeIn delay={0.2} y={20}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
