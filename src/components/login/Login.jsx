import React from 'react'
import './Login.scss'

const Login = () => {
  return (
    <div className='login_container'>
      <div className='inner-container'>
        <h1>Sign In</h1>
        <input type="text" placeholder='Email or phone number' />
        <input type="text" placeholder='Password' />
        <button className='btn-primary'>Sign In</button>
        <div>
          <p>New to Netflix? <a href='*'> Sign Up Now</a></p>
        </div>
      </div> 
    </div>
  )
}
export default Login