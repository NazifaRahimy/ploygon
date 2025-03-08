import Navbar from "./comm/NavBar"
import Home from "./comm/Home"
import Event from "./comm/Event"
import Speaker from "./comm/Speaker"
import Sponsor from "./comm/Sponsor";
import Organizer from "./comm/Organizer";
function App() {
  return (
    < div className="bg-[#020618]">
        <Navbar />
        <Home />
        <Event />
        <Speaker />
        <Sponsor />
        <Organizer />
    </div>
  )
}

export default App
