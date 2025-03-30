import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Book Library. All rights reserved.</p>
      <div className="footer-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/favorites">Favorites</a>
       
      </div>
    </footer>
  )
}

export default Footer