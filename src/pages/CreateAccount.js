import React from 'react'
import FullscreenBackground from '../components/fullscreen-background/FullscreenBackground'

export const CreateAccount = () => {
  return (
    <div>
      <div className='centred_xm_container'>
      <div className='inner-container'>
        <h1>Sign Up</h1>
        <input type="text" placeholder='Enter in email' />
        <input type="text" placeholder='Password' />
        <input type="text" placeholder='Confirm Password' />

        <button className='btn-primary'>Sign Up</button>
      </div> 
    </div>
    <FullscreenBackground/>
    </div>
  )
}
