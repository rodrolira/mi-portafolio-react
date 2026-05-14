/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className={styles.footer}>
      <p>&copy; {currentYear} Mi Portafolio - Todos los derechos reservados</p>
      <div className={styles.socialLinks}>
        <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
    </footer>
  )
}

export default Footer