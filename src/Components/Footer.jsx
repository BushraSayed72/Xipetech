import React from 'react'
import { FaInstagram } from 'react-icons/fa';
import {FaFacebookF} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa'

function Footer() {
  return (
    <div className='footer'>
        <div className='icons'>
        

        <FaInstagram className='iconn'/>
        
        <FaFacebookF className='iconn'/>

       
        
            <FaTwitter className='iconn'/>
        
        </div>
        <p className='About'>
            We are all Elemental
        </p>
        <div className='listss'>
        <ul className='footerlist'>
            <li >About us</li>
            <li> Contact us</li>
            <li>Terms and conditions</li>
            <li>Privacy policy</li>
            <p className=''>Design and Build by Bushra Sayed</p>
        </ul>
        
            
        </div>
    </div>
  )
}

export default Footer