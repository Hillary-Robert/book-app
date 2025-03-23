import React from 'react'
import './Navbar.CSS'
import {NavLink} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import { useRef } from 'react'


const Navbar = () => {

  const navRef = useRef();

  const NavbarChange = () => {
    navRef.current.classList.toggle("active_nav")
  }

  return (

    <header className='nav-header'> 

      <img className='logo' src='./public/logo.png' alt="logo" />

      <nav ref={navRef} className='nav'> 

          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"about"}>About</NavLink>
          <NavLink to={"/favorites"}>Favorites</NavLink>

          <button onClick={NavbarChange} className='nav-btn close-btn'>
            <FaTimes />
          </button>

      </nav>


      <div className="auth">

          <p>
            <a href="">Sign in</a>
          </p>

          <button>Sign up</button>

      </div>


      <button onClick={NavbarChange} className='nav-btn open-btn'>
        <FaBars />
      </button>

    </header>
  
    
  )
}

export default Navbar
