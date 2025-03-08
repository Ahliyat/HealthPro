import React from 'react'
import styles from "./ourServices.module.css";
import serviceImg from "../../assets/services_image.png";
const OurServices = () => {
  return (
   <section className={styles.servicesContainer}>
     <h1>Our Services</h1>
    <div className={styles.imgContainer}>
        <img className={styles.serviceImg} src={serviceImg} alt="services img" />
        <img className={styles.serviceImg} src={serviceImg} alt="services img" />
        <img className={styles.serviceImg} src={serviceImg} alt="services img" />
    </div>
   </section>
  )
}

export default OurServices
