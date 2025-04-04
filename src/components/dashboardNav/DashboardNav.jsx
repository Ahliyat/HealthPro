import React from 'react'
import styles from "./dashboardNav.module.css";
import { FaSearch } from "react-icons/fa";
import Logo from "../../assets/Healthpro_logo.png";
import profileImg from "../../assets/our_doctors.jpg";

const DashboardNav = () => {
  return (
      <section className={styles.dashboardNavContainer}>
        <div className={styles.searchContainer}>
        <FaSearch className={styles.searchIcon}/>
        <input type="text" placeholder="Search" className={styles.searchInput}/>
        </div>
         <div  className={styles.logoContainer}>
         <img className={styles.logo} src={Logo} alt="healthpro logo " />
         </div>
          <div className={styles.profileContainer}>
            <div className={styles.profileText}>
                <h4 className={styles.profileName}>Ayomiposi</h4>
                <p className={styles.title}>Patient</p>
            </div>
            <img
            className={styles.profileImg}
            src={profileImg}
            alt="profile img"
          />
          </div>
</section>
  )
}

export default DashboardNav