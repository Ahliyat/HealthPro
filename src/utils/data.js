import {
  FaBriefcaseMedical,
  FaHouseMedical,
  FaUserInjured,
  FaFileMedical,
  FaFileInvoice
} from "react-icons/fa6";
import { AiFillDashboard } from "react-icons/ai";
import { IoPeople } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { BiSolidInjection } from "react-icons/bi";

export const NavbarData = [
  {
    id: 1,
    path: "/",
    Text: "Home",
  },
  {
    id: 2,
    path: "/Appointments",
    Text: "Appointments",
  },
  {
    id: 3,
    path: "#OurServices",
    Text: "Services",
  },
  {
    id: 4,
    path: "/Aboutus",
    Text: "About us",
  },
  {
    id: 5,
    path: "#ContactUs",
    Text: "Contact us",
  },
];

export const SidebarData = [
  {
    id: 1,
    path: "/Dashboard",
    Text: "Dashboard",
    icon: AiFillDashboard,
  },
  {
    id: 2,
    path: "/StaffDashboard",
    Text: "Staff",
    icon: IoPeople,
  },
  {
    id: 3,
    path: "/AppointmentsDashboard",
    Text: "Appointments",
    icon: FaFileMedical,
  },
  {
    id: 4,
    path: "/Lab",
    Text: "Lab",
    icon: FaBriefcaseMedical,
  },
  {
    id: 5,
    path: "/Ward",
    Text: "Ward",
    icon: FaHome,
  },
  {
    id: 6,
    path: "/Treatment",
    Text: "Treatment",
    icon: BiSolidInjection,
  },
  {
    id: 7,
    path: "/Pharmacy",
    Text: "Pharmacy",
    icon: FaHouseMedical,
  },
  {
    id: 8,
    path: "/Patient",
    Text: "Patient",
    icon: FaUserInjured,
  },
  {
    id: 9,
    path: "/Invoice",
    Text: "Invoice",
    icon: FaFileInvoice,
  },
];

export const DashboardCard1Data = [
  {
    id: 1,
    Text: "Total Patient",
    Number: 20,
    icon: FaUserInjured,
  },
  {
    id: 2,
    Text: "Total Doctors",
    Number: 20,
    icon: BiSolidInjection,
  },
  {
    id: 3,
    Text: "Total Wards",
    Number: 20,
    icon: FaHome,
  },
  {
    id: 4,
    Text: "Total Labs",
    Number: 20,
    icon: FaBriefcaseMedical,
  },
];


