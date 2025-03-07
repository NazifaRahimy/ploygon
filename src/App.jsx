import Navbar from "./comm/NavBar"
import Home from "./comm/Home"
import Event from "./comm/Event"
import Speaker from "./comm/Speaker"
import Sponsor from "./comm/Sponsor"
function App() {
  return (
    < div className="bg-[#020618]">
        <Navbar />
        <Home />
        <Event />
        <Speaker />
        <Sponsor />
    </div>
  )
}

export default App
