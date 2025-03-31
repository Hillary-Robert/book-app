import React, { useState } from 'react'
import './LoginSignup.css'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [name, setName] = useState('')

  const handleSignup = (e) => {
    e.preventDefault()
    if (password !== confirm) {
      alert("Passwords don't match.")
      return
    }

    alert('Want to Login? Oga relax first, I am working on it')
  }
  

  return (

    <>

      <div className='lnSContainter'>
          <h1>Sign up</h1>
          <p>Want to have unlimited access to books, opportunity to join our community of Readers and create a reading schedule? Join us today.</p>
      </div>
    
      <div className="container" >

        
        <form onSubmit={handleSignup} className="form">
          <h4>Enter your details</h4>


          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />


        
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
          />

          <button type="submit">Create Account</button>
          <p style={{
            color: "gray"
          }}>Already have an account? <a href="/login">Login</a></p>
        </form>
      </div>

    </>
  )
}

export default Signup
