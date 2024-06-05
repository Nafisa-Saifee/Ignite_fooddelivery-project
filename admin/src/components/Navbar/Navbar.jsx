import React from 'react'
import './Navbar.css'
import {logo,profile_image} from '../../assets/assets'
export const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='logo' src={logo} alt="" />
        <img className='profile' src={profile_image} alt="" />
    </div>
  )
}


export default Navbar