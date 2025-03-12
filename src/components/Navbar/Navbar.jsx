import React from 'react'
import styles from "./navbar.module.css"
import Button from "../button/Button";
import GeneralStyles from "../../index.module.css";
import Logo from "../../assets/Healthpro_logo.png";
import { NavbarData } from '../../utils/data';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <section className={styles.navBarContainer}>
          <div className={styles.logoContainer}>
          <img className={styles.logo} src={Logo} alt="healthpro logo " />
          </div>
        <ul  className={styles.navItems}>
        {NavbarData.map((item) => (
                    <li key={item.id} className={styles.navItem}>
                    <Link to={item.path} className={styles.navLink}>
                   {item.Text}
                    </Link>
                    </li>
                  ))}
        </ul>
        <div className={styles.navbarBtn}>
        <Button type="button" className={styles.navbarBtn1}>
        <Link to="/SignIn"> Sign in</Link>
          </Button>
        <Button type="button" className={styles.navbarBtn2}>
   <Link to="/Register">Register</Link>
          </Button>
        </div>
      
        </section>
      );
}
// {`${GeneralStyles.container} $
export default Navbar
