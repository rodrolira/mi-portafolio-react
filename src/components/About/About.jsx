// eslint-disable-next-line no-unused-vars
import React from 'react'
import styles from './About.module.css'
import { personalData } from '../../data/personalData'

const About = () => {
  return (
    <section id="sobre-mí" className={`${styles.about} section`}>
      <h2>Sobre mí</h2>
      <p>{personalData.about}</p>
    </section>
  )
}

export default About