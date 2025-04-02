import {Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar/Navbar'
import Home from "./Pages/Home"
import About from "./Pages/About"
import Favorites from "./Pages/Favorites"
import BookDetails from "./Pages/BookDetails"
import Footer from "./components/Footer/Footer"
import Login from './Pages/Login'
import Signup from './Pages/Signup'


function App() {
  

  return (
    <>



      <Navbar />  

      <main className={{flex: 1}}> 
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/favorites" element={<Favorites />} />

          <Route path="/book/:id" element={<BookDetails />} />

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />


        </Routes>

      </main>

      <Footer /> 
    </>
  )
}

export default App
