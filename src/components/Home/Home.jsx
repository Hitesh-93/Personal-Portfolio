import React from 'react'
import styles from './Home.module.css'
import Resume from '../../assets/HiteshDahale.pdf'
import { getImageUrl } from '../../utils.js'

const Home = () => {
    return (
        <section className={styles.container} >
            <div className={styles.content}>
                <p className={styles.text}> Hi, I'm</p>
                <h1 className={styles.title} >Hitesh Dahale</h1>
                <p className={styles.description} >Front End Developer........!</p>
                <a className={styles.contactBtn} href={Resume}>Download cv</a>
            </div>
            <img className={styles.heroImg} src={getImageUrl('photo.png')} alt="MyPhoto" />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}

export default Home