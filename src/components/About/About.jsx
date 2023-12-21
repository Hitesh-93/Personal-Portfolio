import React from 'react'
import styles from './About.module.css'
import { getImageUrl } from '../../utils'



const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img
                    src={getImageUrl("img.webp")}
                    alt="Developer Image"
                    className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        {/* <img src={getImageUrl("indicator.png")} alt="Cursor icon" /> */}
                        <div className={styles.aboutItemText}>
                            <p>
                                I'm a <q>Frontend Developer</q> having good understanding and knowledge of web technologies
                                using HTML, CSS, Bootstrap, JavaScript, ReactJs.
                            </p><br />
                            <p>
                                Seeking an opportunity to work in an environment, which encourage me for my professional
                                growth and enhance my skills and knowledge.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section >
    )
}

export default About