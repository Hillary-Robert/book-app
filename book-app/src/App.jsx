import {Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar/Navbar'
import Home from "./Pages/Home"
import About from "./Pages/About"
import Favorites from "./Pages/Favorites"


function App() {
  

  return (
    <>

      <Navbar />  

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/favorites" element={<Favorites />} />


      </Routes>


      
      
    </>
  )
}

export default App
