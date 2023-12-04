import React from 'react'
import styles from './Skills.module.css'
import skills from '../../data/skills.json'
import { getImageUrl } from '../../utils'


const Skills = () => {
    return (
        <section className={styles.skillcontainer} id="skills">
            <h2 className={styles.skilltitle}>Skills</h2>
            <div className={styles.skillcontent}>
                <div className={styles.skills}>
                    {skills.map((skill, id) => {
                        return (
                            <div key={id} className={styles.skill}>
                                <div className={styles.skillImageContainer}>
                                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                                </div>
                                <p>{skill.title}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default Skills