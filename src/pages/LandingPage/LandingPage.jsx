
import Biography from "../../components/biography/Biography"
import Footer from "../../components/footer/Footer"
import Hero from "../../components/hero/Hero"
import Navbar from "../../components/Navbar/Navbar"
import OurDoctors from "../../components/ourDoctors/OurDoctors"
import OurServices from "../../components/ourServices/OurServices"
import SendUsAMessage from "../../components/sendUsAMessage/SendUsAMessage"

const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
<Biography/>
<OurServices/>
<OurDoctors/>
<SendUsAMessage/>
<Footer/>
    </div>
  )
}
export default LandingPage