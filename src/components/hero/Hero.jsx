import React from 'react'
import styles from "./hero.module.css"
import heroImg from "../../assets/hero_image-removebg-preview.png";
const Hero = () => {
  return (
<section className={styles.heroContainer}>
          <div className={styles.leftHeroContainer}>
            <h1 className={styles.leftHeroHeading}>We help people to get appointments in online</h1>
            <p className={styles.leftHeroText}>Welcome to HealthPro. Our platform streamlines appointment scheduling and patient records to billing and inventory management, improving efficiency and patient care.With intuitive tools, real-time data, and seamless communication, HealthPro ensures smooth and effective management of hospital resources, enhancing both staff performance and patient satisfaction.
</p>
            </div>
          <div className={styles.rightHeroContainer}>
               <img className={styles.heroImg} src={heroImg} alt="hero img" />
            </div>
          
    </section>
  )
}

export default Hero
