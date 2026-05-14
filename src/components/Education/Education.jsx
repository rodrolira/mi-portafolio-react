/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './Education.module.css'
import { personalData } from '../../data/personalData'

const Education = () => {
  return (
    <section id="educacion" className={`${styles.education} section`}>
      <h2>📚 Educación</h2>
      {personalData.education.map((edu, index) => (
        <div key={index} className={styles.educationItem}>
          <h3>{edu.degree}</h3>
          <div className={styles.date}>{edu.institution} | {edu.date}</div>
        </div>
      ))}
    </section>
  )
}

export default Education