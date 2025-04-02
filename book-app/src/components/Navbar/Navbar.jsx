import React from 'react'
import './Navbar.css'
import {NavLink} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import { useRef } from 'react'
import img1 from '../../assets/logo.png';





const Navbar = () => {

  const navRef = useRef();

  const NavbarChange = () => {
    navRef.current.classList.toggle("active_nav")
  }

  return (

    <header className='nav-header'> 

      <img className="logo" src={img1} alt="logo" />

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
            <NavLink to={"/login"}>Log in</NavLink>
          </p>


          <NavLink to={"/signup"}>
            <button >Sign up</button>
          </NavLink>

          

      </div>


      <button onClick={NavbarChange} className='nav-btn open-btn'>
        <FaBars />
      </button>

    </header>
  
    
  )
}

export default Navbar
