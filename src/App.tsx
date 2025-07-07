// src/App.tsx
import { useState } from 'react'
import Education from './components/Education'
import { Hero } from './components/Hero'
import { AboutMe } from './components/AboutMe'
import Tools from './components/Tools'
import Dock from './components/Dock'
import { LanguageSelector } from './components/LanguageSelector'
import { Section } from './types/sections/sections'
import Experience from './components/Experience'
import Contact from './components/Contact'
import { AnimatePresence } from 'framer-motion'
import AnimatedSection from './components/AnimatedSection'


function App() {
  const [activeSection, setActiveSection] = useState<Section>(Section.Hero)

  const renderSection = () => {
    switch (activeSection) {
      case Section.Hero:
        return <Hero />
      case Section.About:
        return <AboutMe />
      case Section.Education:
        return <Education />
      case Section.Tools:
        return <Tools />
      case Section.Experience:
        return <Experience />
      case Section.Contact:
        return <Contact />
      default:
      
        return null
    }
  }

  return (
    <div className="min-h-screen bg-[#f7f7ba] text-[#993399] relative overflow-y-auto">
      {/* Header con selector de idioma */}
      <header className="sticky top-0 z-50 bg-[#993399] text-white p-4 flex justify-end">
        <LanguageSelector />
      </header>

      {/* Sección activa */}
      <main className="h-[calc(100vh-80px)] flex items-center justify-center px-4">
  <AnimatePresence mode="wait">
    <AnimatedSection key={activeSection}>
      {renderSection()}
    </AnimatedSection>
  </AnimatePresence>
</main>


      {/* Dock inferior */}
      <Dock activeSection={activeSection} setActiveSection={setActiveSection} />
    </div>
  )
}

export default App
