/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './Hero.module.css'
import { personalData } from '../../data/personalData'

const Hero = () => {
  return (
    <section id="inicio" className={`${styles.hero} section`}>
      <div className={styles.heroContent}>
        <div className={styles.avatar}>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        </div>
        <h1>{personalData.name}</h1>
        <div className={styles.title}>{personalData.title}</div>
        <div className={styles.contactInfo}>
          <a href={`mailto:${personalData.email}`}>📧 {personalData.email}</a>
          <a href={`tel:${personalData.phone}`}>📱 {personalData.phone}</a>
          <a href={personalData.github} target="_blank" rel="noopener noreferrer">💼 GitHub</a>
          <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer">🔗 LinkedIn</a>
          <span>📍 {personalData.location}</span>
        </div>
      </div>
    </section>
  )
}

export default Hero