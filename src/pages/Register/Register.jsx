import styles from "./register.module.css";
import Button from "../../components/button/Button";
import Navbar from "../../components/navbar/Navbar";
import React from 'react'
import Hero from "../../components/hero/Hero";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <section className={styles.registerContainer}>
        <h1>Sign Up</h1>
        <h3>Please Sign Up To Continue</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim soluta ut modi ducimus cumque consectetur.</p>
        <form className={styles.registerInputContainer}>
          <div className={styles.twoInputs}>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div className={styles.twoInputs}>
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Mobile Number" />
          </div>
          <div className={styles.twoInputs}>
            <input type="text" placeholder="NIC" />
            <input type="text" placeholder="Date Of Birth " />
          </div>
          <input
            className={styles.oneInput}
            type="text"
            placeholder="Address"
          />
          <div className={styles.threeInputs}>
            <select id="gender" className={styles.placeholder} name="Gender">
              <option  value="" disabled selected>
                Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="non-binary">Non-binary</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
              <option value="other">Other</option>
            </select>

            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
          </div>
        </form>
        <Button className={styles.registerBtn}>
        <Link to="/SignIn">Register</Link>
        </Button>
      </section>
      <Footer/>
    </div>
  )
}

export default Register