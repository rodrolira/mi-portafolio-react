/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './Projects.module.css'

const ProjectCard = ({ title, description, tags, link, github, image }) => {
  return (
    <div className={styles.projectCard}>
      {image && (
        <div className={styles.projectCard}>
          <img src={image} alt={title} className={styles.image} />
        </div>
      )}

      <div className={styles.projectInfo}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.projectTags}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.projectTag}>{tag}</span>
          ))}
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer" className={styles.btn}>Ver proyecto →</a>
        <a href={github} target="_blank" rel="noopener noreferrer" className={styles.btnGithub}>Ver código →</a>
      </div>
    </div>
  )
}

export default ProjectCard