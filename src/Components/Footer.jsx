import React from 'react'
import { FaInstagram } from 'react-icons/fa';
import {FaFacebookF} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa'

function Footer() {
  return (
    <div className='footer'>
        <div className='icons'>
        
       <div className='iconDiv'>
       <FaInstagram className='iconn'/>
       </div>
       
       <div className='iconDiv'>
        <FaFacebookF className='iconn'/>
        </div>

       
        <div className='iconDiv'><FaTwitter className='iconn'/></div>
        
        
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
            <li>Design and Build by Bushra Sayed</li>
           
        </ul>
       
        
            
        </div>
    </div>
  )
}

export default Footer