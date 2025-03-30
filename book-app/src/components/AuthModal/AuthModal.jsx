import React from 'react'
import './AuthModal.css'

const AuthModal = ({ onClose }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>Sign up or Log in</h2>
        <p>You must be signed in to read this book.</p>

        <div className="modal-buttons">
          <button onClick={() => alert(`Can't sign up now, try again later`)}>Sign Up</button>
          <button onClick={() => alert(`Can't Log in now, try again later`)}>Log In</button>
        </div>

        <button className="close-btn" onClick={onClose}>✖</button>
      </div>
    </div>
  )
}

export default AuthModal
