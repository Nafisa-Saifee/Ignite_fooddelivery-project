import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='Footer' id='Footer'>
        <div className="footer-content">
                <div className="footer-content-left">
                        <img className='footer-content-left-img' src={assets.black_logo} alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi reiciendis incidunt, vel nihil odit in optio doloribus natus a voluptate ab, fugiat qui quas, illo quos nesciunt tempore molestias enim.</p>
                        <div className="footer-social-icons">
                                <img src={assets.facebook_icon} alt="" />
                                <img src={assets.twitter_logo} alt="" />
                                <img src={assets.linkedin_logo} alt="" />
                        </div>
                </div>
                <div className="footer-content-center">
                        <h2>COMPANY</h2>
                        <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                        </ul>
                </div>
                <div className="footer-content-right">
                        <h2>GET IN TOUCH</h2>
                        <ul>
                                <li>+2-758-447-9769</li>
                                <li>contact@food-delivery.com</li>
                        </ul>
                </div>
                
        </div>
        <hr />
        <p className="copy-right">Copyright 2024 Food-delivery.com - All Right Reversed.</p>
    </div>
  )
}

export default Footer