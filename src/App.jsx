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
    < div className="bg-[#020618]">
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
  )
}

export default App
