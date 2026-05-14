/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = ['Inicio', 'Sobre mí', 'Habilidades', 'Proyectos', 'Experiencia', 'Contacto']

  const scrollToSection = (section) => {
    const element = document.getElementById(section.toLowerCase().replace(' ', '-'))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <span className={styles.logoText}>AG</span>
        </div>
        
        <div className={`${styles.navLinks} ${isMobileMenuOpen ? styles.active : ''}`}>
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(item)}
              className={styles.navLink}
            >
              {item}
            </button>
          ))}
        </div>
        
        <button 
          className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.active : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar