import Navbar from '../comps/Navbar/Navbar.js'
import Herosection from '../comps/Herosection/Herosection.js'
import Info from '../comps/Info/Info.js'
import Services from '../comps/InfoServices/Services'
import { FooterContainer } from '../containers/footer.js'
import Contact from '../comps/Contact/Contact.js'
export default function Home() {
  return (
    <div >
      <Navbar />
      <Herosection />
      <Info />
      <Services />
      <FooterContainer />
      <Contact />
    </div>
  )
}
