import React from 'react'
import styles from "./sidebar.module.css";
import { FaBars} from "react-icons/fa6";
import { SidebarData } from '../../utils/data';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (

      <section className={styles.sidebarContainer}>
<FaBars className={styles.bars}/>
<div className={styles.sidebarItems}>
      {SidebarData.map((item) => (
                        <div key={item.id} className={styles.sidebarItem}>
                        <item.icon className={styles.sidebarIcon}/>
                        <Link to={item.path} className={styles.sidebarLink}>
                       {item.Text}
                        </Link>
                        </div>
                      ))}
  
</div>
      </section>
 
  )
}

export default Sidebar