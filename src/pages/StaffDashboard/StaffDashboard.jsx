import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar"
import styles from './StaffDashboard.module.css'  
import DashboardNav from "../../components/dashboardNav/DashboardNav"
import RecentDoctors from "../../components/recentDoctors/RecentDoctors"
import Button from '../../components/button/Button'
const StaffDashboard = () => {
  return (
  <section className={styles.staffDashboardContainer}>
    <Sidebar />
    <DashboardNav />
    <section>
<h2>
  Staff Management
</h2>
<section>
  <div>
  <Button>

  </Button>
  <form>
    <input type="text" />
    <Button></Button>
  </form>
  </div>
</section>
    </section>
<RecentDoctors/>  
  </section>
  )
}

export default StaffDashboard