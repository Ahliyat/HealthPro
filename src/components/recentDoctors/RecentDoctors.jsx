import React from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import styles from "./recentDoctors.module.css";
const RecentDoctors = () => {
  return (
    <section className={styles.recentDoctorsContainer}>
      <h3>Recent Doctors</h3>

      <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
      <table className={styles.recentDoctorsContent}>
        <thead>
          <tr className={styles.recentDoctorsLine1}>
            <th>Id</th>
            <th>Name</th>
            <th>Mobile</th>
            <th>Address</th>
            <th>Gender</th>
            <th>Consultation Fee</th>
            <th>Education</th>
            <th>DOB</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Akeem</td>
            <td>0213987</td>
            <td>Lagos</td>
            <td>Male</td>
            <td>25000.00</td>
            <td>Hnd</td>
            <td>1994-06-26</td>
            <td>Online</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jemila</td>
            <td>0293776</td>
            <td>Abuja</td>
            <td>Male</td>
            <td>25000.00</td>
            <td>Msc</td>
            <td>1992-08-31</td>
            <td>Online</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Patrick</td>
            <td>9237643</td>
            <td>Delta</td>
            <td>Male</td>
            <td>25000.00</td>
            <td>Bcs</td>
            <td>1995-02-16</td>
            <td>Offline</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Khalid</td>
            <td>439488</td>
            <td>Ibadan</td>
            <td>Male</td>
            <td>25000.00</td>
            <td>Phd</td>
            <td>1999-02-19</td>
            <td>Offline</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default RecentDoctors;
