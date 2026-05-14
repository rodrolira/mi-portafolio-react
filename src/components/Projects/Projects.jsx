/* eslint-disable no-unused-vars */
import React from 'react'
import ProjectCard from './ProjectCard'
import styles from './Projects.module.css'
import { personalData } from '../../data/personalData'

const Projects = () => {
  return (
    <section id="proyectos" className={`${styles.projects} section`}>
      <h2>🚀 Proyectos Destacados</h2>
      <div className={styles.projectsGrid}>
        {personalData.projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects