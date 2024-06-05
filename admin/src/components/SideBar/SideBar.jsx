import React from 'react'
import './SideBar.css'
import {add_icon,order_icons } from '../../assets/assets'
import { NavLink } from 'react-router-dom'
const SideBar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <NavLink to='/add' className="sidebar-option">
          <img src={add_icon} alt="" />
          <p>Add items</p>
        </NavLink>
        <NavLink to='/list'className="sidebar-option">
          <img src={order_icons} alt="" />
          <p>List Items</p>
        </NavLink>
        <NavLink to='/orders' className="sidebar-option">
          <img src={order_icons} alt="" />
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default SideBar