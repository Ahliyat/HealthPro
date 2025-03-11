import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/hero/Hero'
import Footer from '../../components/footer/Footer'
import AppointmentInput from '../../components/appointmentInput/AppointmentInput'

const Appointments = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <AppointmentInput/>
        <Footer/>
    </div>
  )
}

export default Appointments