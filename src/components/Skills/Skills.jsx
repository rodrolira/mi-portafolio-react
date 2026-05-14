import React, { useRef } from 'react'
import styles from './Skills.module.css'
import { personalData } from '../../data/personalData'
import useProgressAnimation from '../../hooks/useProgressAnimation'

const SkillCategory = ({ title, skills }) => {
  const sectionRef = useRef(null)
  const animated = useProgressAnimation(sectionRef)

  return (
      <div className={styles.skillCategory} ref={sectionRef}>
        <h3>{title}</h3>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillItem}>
            <div className={styles.skillName}>{skill.name}</div>
            <div className={styles.progressBar}>
              <div
                className={styles.progress}
                data-level={skill.level}
                style={{ width: animated ? `${skill.level}%` : '0%' }}
              ></div>
            </div>
            <div className={styles.percentage}>{skill.level}%</div>
          </div>
        ))}
      </div>
  )
}

const Skills = () => {
  return (
    <section id="habilidades" className={`${styles.skills} section`}>
      <h2>💻 Lenguajes y Tecnologías</h2>
      <div className={styles.skillsGrid}>
        <SkillCategory title="Frontend" skills={personalData.skills.frontend} />
        <SkillCategory title="Backend" skills={personalData.skills.backend} />
        <SkillCategory title="Bases de Datos & Herramientas" skills={personalData.skills.databases} />
      </div>
    </section>
  )
}
export default Skills