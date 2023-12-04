import React from 'react'
import styles from './Contact.module.css'
import { getImageUrl } from '../../utils.js'


const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <a href="mailto:hiteshdahale@gmail.com">
                        <img src={getImageUrl("emailIcon.png")} alt="Email icon" />
                    </a>
                </li>
                <li className={styles.link}>
                    <a href="https://www.linkedin.com/in/hitesh-dahale-710763122" target='_blank' >
                        <img src={getImageUrl("linkedinIcon.png")} alt="LinkedIn icon" />
                    </a>
                </li>
                <li className={styles.link}>
                    <a href="https://www.github.com/Hitesh-93" target='_blank' >
                        <img src={getImageUrl("githubIcon.png")} alt="Github icon" />
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Contact