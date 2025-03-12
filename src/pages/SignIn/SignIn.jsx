import styles from "./signin.module.css";
import Button from "../../components/button/Button";
import Navbar from "../../components/navbar/Navbar";
import React from "react";
import Hero from "../../components/hero/Hero";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className={styles.signInContainer}>
     <Navbar/>
     <Hero/>  
    <section className={styles.signInInputContainer}>
      <h1>Sign In</h1>
    <input type="email" placeholder="Email" />
     <input type="password" placeholder="Password" />
     <Button className={styles.signinBtn}>
        <Link to="/Dashboard">Sign In</Link>
        </Button>
    </section>
     <Footer/>
    </div>
  )
}

export default Signin