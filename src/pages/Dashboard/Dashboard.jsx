import React from "react";
import styles from "./dashboard.module.css";
import Sidebar from "../../components/sidebar/Sidebar";
import DashboardNav from "../../components/dashboardNav/DashboardNav"
import { DashboardCard1Data } from "../../utils/data";
import OutofStock from "../../components/outOfStock/OutOfStock";
import RecentDoctors from "../../components/recentDoctors/RecentDoctors";
const Dashboard = () => {
  return (
    <section className={styles.dashboardContainer}>
      <Sidebar />
      <DashboardNav />
      <section className={styles.dashboardBody}>
        <section className={styles.dashboardCards1}>
          {DashboardCard1Data.map((item) => (
            <div key={item.id} className={styles.dashboardCard1}>
              <item.icon className={styles.dashboardCard1Icon} />
              <div  className={styles.dashboardcard1Text}>
                <h4>{item.Text}</h4>
                <p>{item.Number}</p>
              </div>
            </div>
          ))}
        </section>
        <sectiion>
          
        </sectiion>
        <RecentDoctors/>
     <OutofStock/>
      </section>
    </section>
  );
};

export default Dashboard;
