import React from 'react'
import './AppDownload.css'
import { assets} from '../../assets/assets'
const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'> 
    <p>For Better Experience Download <br/>Food-Deilvery App</p>
    <div className='app-download-platform'>
        <img className='app-download-platform-img1' src={assets.playstore_icon} alt="" />
        <img  className='app-download-platform-img2' src={assets.mac_store} alt="" />
    </div>
    </div>
  )
}

export default AppDownload