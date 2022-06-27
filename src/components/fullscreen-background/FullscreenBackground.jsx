import React from 'react'
import './FullscreenBackground.scss'
import img from '../../assets/images/loginBg.jpg'

const FullscreenBackground = () => {
  return (
    <div className='image_container'>
      <img src={img} alt="background-img" />
    </div>
  )
}
export default FullscreenBackground