// eslint-disable-next-line no-unused-vars
import React from 'react'
import styles from './Experience.module.css'

const ExperienceItem = ({ title, date, description }) => {
  return (
    <div className={styles.experienceItem}>
      <h3>{title}</h3>
      <div className={styles.date}>{date}</div>
      <p>{description}</p>
    </div>
  )
}

export default ExperienceItem