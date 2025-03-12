import React from "react";
import Button from "../button/Button";
import styles from "./appointmentInput.module.css";
const AppointmentInput = () => {
  return (
      <section className={styles.appointmentContainer}>
        <h1>Appointment</h1>
        
        <form className={styles.appointmentInputContainer}>
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
          <div className={styles.threeInputs}>
            <select id="gender" className={styles.placeholder} name="Gender">
              <option value="" disabled selected>
                Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="non-binary">Non-binary</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
              <option value="other">Other</option>
            </select>

            <input type="text" placeholder="Appointment Date dd/mm/yyyy" />
            <input type="tel" placeholder="Appointment Time 00:00" />
          </div>
          <div className={styles.twoInputs}>
            <input type="text" placeholder="Department Name" />
            <input type="text" placeholder="Doctor Name" />
          </div>
          <input
            className={styles.oneInput}
            type="text"
            placeholder="Address"
          />
        </form>
        <Button className={styles.appointmentBtn}>Register</Button>
      </section>

  );
};

export default AppointmentInput;
