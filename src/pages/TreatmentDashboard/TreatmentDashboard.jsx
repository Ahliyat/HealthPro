import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar";
import styles from "./treatmentDashboard.module.css";
import DashboardNav from "../../components/dashboardNav/DashboardNav";
import Button from "../../components/button/Button";
import OutOfStock from '../../components/outOfStock/OutOfStock';
const TreatmentDashboard = () => {
  return (
    <section className={styles.staffDashboardContainer}>
    <Sidebar />
    <DashboardNav />
    <section className={styles.staffDashboardBody}>
      <h2>Staff Management</h2>
      <section className={styles.staffDashboardInput}>
        <div className={styles.inputPartOne}>
          <Button className={styles.reportBtn}>Generate Report</Button>
          <form className={styles.babyForm}>
            <input placeholder="Medicine ID" type="number" />
            <Button className={styles.searchBtn}> Search</Button>
          </form>
        </div>
        <form className={styles.inputPartTwo}>
          <input placeholder="Medicine Name" type="text" />
          <input placeholder=" Supplier Name" type="text" />
        </form>
        <form className={styles.inputPartTwo}>
          <input placeholder="Expiry Date" type="email" />
          <input placeholder="Manufacture Date" type="tel" />
        </form>
        <form className={styles.inputPartTwo}>
          <input placeholder="QTY" type="text" />
          <input placeholder="Unit Price" type="text" />
        </form>
        <div className={styles.inputPartEight}>
          <Button className={styles.greenButton}>Add</Button>
          <Button className={styles.purpleButton}>Update</Button>
          <Button className={styles.redButton}>Delete</Button>
        </div>
      </section>
      <OutOfStock />
    </section>
  </section>
  )
}

export default TreatmentDashboard