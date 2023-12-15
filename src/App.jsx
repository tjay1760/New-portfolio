import { BrowserRouter } from "react-router-dom";
import {About, Contact , Experience, Feedbacks,Hero,Works,Tech,Navbar, StarsCanvas, BallCanvas} from './components';
function App() {


  return (
    <>
      <div>
        <BallCanvas/>
        <About/>
        <StarsCanvas/>
        My developer portfolio
      </div>
    </>
  )
}

export default App
