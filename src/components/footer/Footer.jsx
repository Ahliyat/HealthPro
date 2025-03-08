import React from "react";
import styles from "./footer.module.css";
import Logo from "../../assets/Healthpro_logo.png";
import { NavbarData } from "../../utils/data";
import { FaPhone,  FaEnvelope } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <section className={styles.footerContainer}>
      <div className={styles.footerLine}></div>
      <div className={styles.footerContent}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src={Logo} alt="healthpro logo " />
        </div>
        <div className={styles.footerItem}>
        <h3>Quick Links</h3>
    
        <ul className={styles.footerLinks}>
          {NavbarData.map((item) => (
            <li key={item.id} className={styles.footerLink}>
              <Link to={item.path} className={styles.navLink}>
                {item.Text}
              </Link>
            </li>
          ))}
        </ul>
        </div>
        <div className={styles.footerItem}>
          <h3>Hours</h3>
    
          <ul className={styles.footerHours}v>
            <li>Monday:   9:00-18:00 </li>
            <li>Tuesday:  9:00-18:00</li>
            <li>Wednesday:  9:00-18:00</li>
            <li>Thursday:  9:00-18:00</li>
            <li>Friday:  9:00-18:00</li>
          </ul>
        </div>
        <div className={styles.footerItem}>
            <h3>Contact</h3>
         <div className={styles.contactContainer}>
         <div className={styles.contactContent}>
            <FaPhone />
                <p>07789309875</p>
            </div>
            <div className={styles.contactContent}>
            <FaEnvelope />
                <p>ahliyahorenuga@gmail.com</p>
            </div>
            <div className={styles.contactContent}>
            <FaTelegramPlane />
                <p>Lagos,Nigeria</p>
            </div>
         </div>
           
           
        </div>
      </div>
    </section>
  );
};


export default Footer;
