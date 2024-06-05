import React from 'react'
import './Header.css'
import { assets} from '../../assets/assets'
const Header = () => {
  return (
 <div className='header'>
 <div className='header-content'>
         <img className="header-img" src={assets.header_logo} alt="" />
        <h2 className='header-h2'>Order Your favourite food here</h2>
        <p className='header-para'>"Indulge in gourmet meals delivered to your doorstep. Experience the flavors of world-class cuisine, fresh ingredients, and exquisite taste—all in the comfort of your home. Order now!"</p>
        
</div>
 </div>  )
}

export default Header