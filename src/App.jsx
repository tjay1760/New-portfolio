import { BrowserRouter } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import {About, Contact , Experience, Feedbacks,Hero,Works,Tech,Navbar, StarsCanvas,RateCard} from './components';
import { Socials } from "./components/Socials";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { profilepic } from "./assets";

function App() {


  return (
    <BrowserRouter>
<div className="relative z-0 bg-primary">
  <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
    <Navbar/>
    <Hero/>
  </div>
  <About/>
  <Experience/>
  <Tech/>
 
  <Works/>

  
  <Feedbacks/>
     <RateCard/>
  <div className="relative z-0">
    <Contact/>
    <StarsCanvas/>
    <Socials/>
    <FloatingWhatsApp
  phoneNumber="+254716128101"
  accountName="John Murianki"
  avatar={profilepic}

  chatMessage="Hello 👋 Feel free to type your message below"
  statusMessage="Typically replies within minutes"

  placeholder="Type your message here..."
  
  notification={true}
  notificationSound={true}

  allowClickAway={true}
  allowEsc={true}

  messageDelay={1}
  chatboxHeight={320}

  darkMode={true}
/>
  </div>
</div>
    </BrowserRouter>
  )
}

export default App
