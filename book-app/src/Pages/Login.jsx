import React, { useState } from 'react'
import './LoginSignup.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    alert('Want to Login? Oga relax first, I am working on it')

  }

  return (


    <div style={{marginBottom: "10rem"}}>

      <div className='lnSContainter'>
          <h1>Welcome Back</h1>

          <p>Continue with us and enjoy free online books, online communities and many more</p>
         
      </div>
      <div className="container">
        <form onSubmit={handleLogin} className="form">
          <h4>Login</h4>

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

          <button type="submit">Login</button>
          <p style={{
            color: "gray"
          }}>Don't have an account? <a href="/signup">Sign up</a></p>
        </form>
      </div>

    </div>
  )
}

export default Login
