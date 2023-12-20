import React from 'react'
import styles from './About.module.css'
import { getImageUrl } from '../../utils'
// import skills from '../../data/skills.json'



const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img
                    src={getImageUrl("img.webp")}
                    alt="Me sitting with a laptop"
                    className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        {/* <img src={getImageUrl("indicator.png")} alt="Cursor icon" /> */}
                        <div className={styles.aboutItemText}>
                            {/* <h3>Frontend Developer</h3> */}
                            {/* <p>
                                I'm a <q>Frontend Developer</q> having good understanding and knowledge of web technologies
                                using HTML, CSS, Bootstrap, JavaScript, ReactJs.
                            </p><br /> */}
                            <p>
                                Seeking an opportunity to work in an environment, which encourage me for my professional
                                growth and enhance my skills and knowledge.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>





            {/* <section className={styles.skillcontainer} id="skills">
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
            </section> */}



        </section >
    )
}

export default About