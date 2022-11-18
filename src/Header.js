import React from 'react'
import Logo from './Images/Logo(1).png'


function header() {
  return (
    <div className='header'>
      <div className='all-header'>
      <div className='logo'>
        <img src={Logo} alt=""></img>
      </div>
      <div className='nav'>
        <li className='blog'>Blog</li>
        <li className='pricing'>pricing</li>
        <li className='login'>Login</li>
        <li className='sign-up'>Sign Up</li>
      </div>
      </div>
    </div>
  )
}

export default header