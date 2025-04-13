import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import styles from "./StaffDashboard.module.css";
import DashboardNav from "../../components/dashboardNav/DashboardNav";
import RecentDoctors from "../../components/recentDoctors/RecentDoctors";
import Button from "../../components/button/Button";
const StaffDashboard = () => {
  return (
    <section className={styles.staffDashboardContainer}>
      <Sidebar />
      <DashboardNav />
      <section className={styles.staffDashboardBody}>
        <h2>Staff Management</h2>
        <section className={styles.staffDashboardInput}>
          <div className={styles.inputPartOne}>
            <Button className={styles.reportBtn}>General Report</Button>
            <form className={styles.babyForm}>
              <input placeholder="ID" type="number" />
              <Button className={styles.searchBtn}> Search</Button>
            </form>
          </div>
          <form className={styles.inputPartTwo}>
            <input placeholder="First Name" type="text" />
            <input placeholder=" Last Name" type="text" />
          </form>
          <form className={styles.inputPartTwo}>
            <input placeholder=" Role" type="text" />
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
          </form>
          <form className={styles.inputPartTwo}>
            <input placeholder="Email" type="email" />
            <input placeholder="Mobile Number" type="tel" />
          </form>
          <input className={styles.address} placeholder="Address" type="text" />
          <form className={styles.inputPartTwo}>
            <input placeholder="NIC" type="text" />
            <input placeholder="Date Of Birth" type="text" />
          </form>
          <form className={styles.inputPartTwo}>
            <input placeholder="Password" type="password" />
            <input placeholder=" Confirm Password" type="password" />
          </form>
          <div className={styles.inputPartEight}>
            <Button className={styles.greenButton}>Register</Button>
            <Button className={styles.purpleButton}>Update</Button>
            <Button className={styles.redButton}>Delete</Button>
          </div>
        </section>
        <RecentDoctors />
      </section>
    </section>
  );
};

export default StaffDashboard;
