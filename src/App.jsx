import Navbar from "./comm/NavBar"
import Home from "./comm/Home"
import Event from "./comm/Event"
import Speaker from "./comm/Speaker"
function App() {
  return (
    < div className="bg-[#020618]">
        <Navbar />
        <Home />
        <Event />
        <Speaker />
    </div>
  )
}

export default App
