import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.module.css";
import App from "./App.jsx";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import Register from "./pages/Register/Register.jsx";
import SignIn from "./pages/SignIn/SignIn.jsx"
import Layout from "./pages/layout/Layout.jsx";
import NotFound from "./pages/Error/NotFound.jsx";
import Aboutus from "./pages/Aboutus/Aboutus.jsx";
import Appointments from "./pages/Appointment/Appointments.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx"
import OurServices from "./components/ourServices/OurServices.jsx";
import StaffDashboard from "./pages/StaffDashboard/StaffDashboard.jsx"
import AppointmentDashboard from "./pages/AppointmentDashboard/AppointmentDashboard.jsx";
import TreatmentDashboard from "./pages/TreatmentDashboard/TreatmentDashboard.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/Register",
        element: <Register />,
      },
      {
        path: "/SignIn",
        element: <SignIn />,
      },
      {
        path: "/Aboutus",
        element: <Aboutus />,
      },
      {
        path: "/Appointments",
        element: <Appointments />,
      },
      {
        path: "/Dashboard",
        element: <Dashboard />,
      },
      {
        path: "/StaffDashboard",
        element: <StaffDashboard/>,
      },
      {
        path: "/AppointmentDashboard",
        element: <AppointmentDashboard/>,
      },
      {
        path: "/TreatmentDashboard",
        element: <TreatmentDashboard/>,
      },
      {
        path: "#OurServices",
        element: <OurServices />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
);
