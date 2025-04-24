import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import styles from "./appointmentDashboard.module.css";
import DashboardNav from "../../components/dashboardNav/DashboardNav";
import { FaRegTrashCan } from "react-icons/fa6";
import Button from "../../components/button/Button";
const AppointmentDashboard = () => {
  return (
    <section className={styles.appointmentDashboardContainer}>
      <Sidebar />
      <DashboardNav />
      <section className={styles.appointmentDashboardBody}>
        <h2>Appointment Management</h2>
        <section className={styles.appointmentDashboardInput}>
          <div className={styles.inputPartOne}>
            <Button className={styles.reportBtn}>Generate Report</Button>
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
            <input placeholder="Email" type="email" />
            <input placeholder="Mobile Number" type="tel" />
          </form>
          <form className={styles.inputPartTwo}>
            <input placeholder="NIC" type="text" />
            <input placeholder="Date Of Birth" type="text" />
          </form>
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
          <div className={styles.inputPartTwo}>
            <input type="text" placeholder="Department Name" />
            <input type="text" placeholder="Doctor Name" />
          </div>
          <input className={styles.address} type="text" placeholder="Address" />
          <div className={styles.inputPartEight}>
            <Button className={styles.greenButton}>Register</Button>
            <Button className={styles.purpleButton}>Update</Button>
            <Button className={styles.redButton}>Delete</Button>
          </div>
        </section>
        <section className={styles.recentAppointmentsContainer}>
          <h3>Recent Appointments </h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
          <table className={styles.recentAppointmentsContent}>
            <thead>
              <tr className={styles.recentAppoitmentsLine1}>
                <th>Id</th>
                <th>Name</th>
                <th>Role</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Mobile Number</th>
                <th>NIC</th>
                <th>DOB</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Akeem</td>
                <td>Doctor</td>
                <td>Male</td>
                <td>akshnkhg@gmail.com</td>
                <td>09302500000</td>
                <td>29097635</td>
                <td>1994-06-26</td>
                <td>Online</td>
                <td>
                  <FaRegTrashCan />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jemila</td>
                <td>Doctor</td>
                <td>Male</td>
                <td>akshnkhg@gmail.com</td>
                <td>09302500000</td>
                <td>29097635</td>
                <td>1992-08-31</td>
                <td>Online</td>
                <td>
                  <FaRegTrashCan />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Patrick</td>
                <td>Doctor</td>
                <td>Male</td>
                <td>akshnkhg@gmail.com</td>
                <td>09302500000</td>
                <td>29097635</td>
                <td>1995-02-16</td>
                <td>Offline</td>
                <td>
                  <FaRegTrashCan />
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Khalid</td>
                <td>Doctor</td>
                <td>Male</td>
                <td>akshnkhg@gmail.com</td>
                <td>09302500000</td>
                <td>29097635</td>
                <td>1999-02-19</td>
                <td>Offline</td>
                <td>
                  <FaRegTrashCan />
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </section>
    </section>
  );
};

export default AppointmentDashboard;
