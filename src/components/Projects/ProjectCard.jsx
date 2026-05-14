/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './Projects.module.css'

const ProjectCard = ({ title, description, tags, link }) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectInfo}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.projectTags}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.projectTag}>{tag}</span>
          ))}
        </div>
        <a href={link} className={styles.btn}>Ver proyecto →</a>
      </div>
    </div>
  )
}

export default ProjectCard