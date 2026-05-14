// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Experience from './components/Experience/Experience'
import Education from './components/Education/Education'
import LanguagesCertifications from './components/LanguagesCertifications/LanguagesCertifications'
import Footer from './components/Footer/Footer'

function App() {
  const mainRef = useRef(null)

  useEffect(() => {
    // Añadir clase de animación al cargar
    const sections = document.querySelectorAll('.section')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up')
        }
      })
    }, { threshold: 0.1 })

    sections.forEach(section => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="container" ref={mainRef}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <LanguagesCertifications />
      <Footer />
    </div>
  )
}

export default App