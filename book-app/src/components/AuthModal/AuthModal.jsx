import React from 'react'
import './AuthModal.css'
import { NavLink } from 'react-router-dom'

const AuthModal = ({ onClose }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>Sign up or Log in</h2>
        <p>You must be signed in to read this book.</p>

        <div className="modal-buttons">

          <NavLink to="/signup">
          <button>Sign Up</button> 
          </NavLink>
          

          <NavLink to="/login">
          <button>Log in</button> 
          </NavLink>
          
        </div>

        <button className="close-btn" onClick={onClose}>✖</button>
      </div>
    </div>
  )
}

export default AuthModal
