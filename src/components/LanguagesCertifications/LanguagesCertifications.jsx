/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './LanguagesCertifications.module.css'
import { personalData } from '../../data/personalData'

const LanguagesCertifications = () => {
  return (
    <section id="contacto" className={`${styles.languagesCertifications} section`}>
      <h2>🌟 Idiomas y Certificaciones</h2>
      <div className={styles.grid}>
        <div className={styles.category}>
          <h3>Idiomas</h3>
          {personalData.languages.map((lang, index) => (
            <div key={index} className={styles.skillName}>{lang}</div>
          ))}
        </div>
        <div className={styles.category}>
          <h3>Certificaciones</h3>
          {personalData.certifications.map((cert, index) => (
            <div key={index} className={styles.skillName}>{cert}</div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LanguagesCertifications