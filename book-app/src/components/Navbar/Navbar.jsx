import React from 'react'
import './Navbar.CSS'
import {NavLink} from 'react-router-dom'




const Navbar = () => {
  return (
    <nav className='nav'>

      
      <img className='logo' src='./public/logo.png' alt="logo" /> 
      

      <ul className="nav-links">
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"about"}>About</NavLink></li>
        <li><NavLink to={"/favorites"}>Favorites</NavLink></li>
      </ul>


      <div className="auth">

        <p>
          <a href="">Sign in</a>
        </p>

        <button>Sign up</button>

      </div>

    </nav>  
  )
}

export default Navbar