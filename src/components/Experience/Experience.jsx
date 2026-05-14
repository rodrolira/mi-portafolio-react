/* eslint-disable no-unused-vars */
import React from 'react'
import ExperienceItem from './ExperienceItem'
import styles from './Experience.module.css'
import { personalData } from '../../data/personalData'

const Experience = () => {
  return (
    <section id="experiencia" className={`${styles.experience} section`}>
      <h2>💼 Experiencia</h2>
      {personalData.experience.map((exp, index) => (
        <ExperienceItem key={index} {...exp} />
      ))}
    </section>
  )
}

export default Experience