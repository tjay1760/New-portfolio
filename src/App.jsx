import { BrowserRouter } from "react-router-dom";
import {About, Contact , Experience, Feedbacks,Hero,Works,Tech,Navbar, StarsCanvas} from './components';
function App() {


  return (
    <BrowserRouter>
<div className="">
  <div className="border-2 border-red-200 font-bold">
    Bold font
    <Navbar/>
    <Hero/>

  </div>
</div>
    </BrowserRouter>
  )
}

export default App
