import Navbar from "./comm/NavBar"
import Home from "./comm/Home"
import Event from "./comm/Event"
import Speaker from "./comm/Speaker"
import Sponsor from "./comm/Sponsor";
import Organizer from "./comm/Organizer";
import Contact from "./comm/Contact";
import { useState } from "react";

function App() {
  const [click ,setClick] = useState(false)
  return (
    <div className="absolute w-[100%] top-[0%] left-[0%] 2x:w-[100%] 2xl:bg-red-300  border-box">
      < div className="relative mx-auto bg-[#020618] w-[100%] h-auto sm:w-[100%] sm:h-auto md:w-[100%] md:h-[100%] lg:w-[100%] lg:h-auto xl:w-[100%] xl:h-auto 2xl:w-[1366px] 2xl:h-auto ">
        <Navbar />
        <Home />
        <Event />
        <Speaker />
        <Sponsor />
        <Organizer />
        <Contact />
        <br/>
        <br/>
        <br/>
        <br/>
        <button  onClick={()=>setClick(!click)}
        className='button w-1/2 h-20 flex items-center mx-auto justify-center text-3xl font-bold duration-300 bg-purple-500 hover:bg-purple-600 text-white text-center  le'>{click ? 'be the best always' : 'Click me!'}</button>
    </div>
    </div>
  )
}

export default App
