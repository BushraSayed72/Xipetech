import React from 'react'
import { FaShoppingCart  } from "react-icons/fa";
import vector6 from '../Images/Vector (6).png';


function Navbar() {
  return (
    <div className='navbar'>
    <div className='greenFlat'></div>
    <div className='greenCircle'></div>
    <div className='blueCircle'></div>
   <img src={vector6} className='heading'/> 
   <div className='halfsemicircle'></div>
    
    <div >
        <ul className='right-nav' >
            <li className='text-primary'>Shop</li>
            <li className='text-primary'> About us</li>
            <li className='text-primary'>My workbooks</li>
            <button className="btn btn-light">Login</button>
            <button  className="btn btn-primary">Sign up</button>
            <p><FaShoppingCart className='nav-icon'/></p>
        </ul>
    </div>
      
    </div>
  )
}

export default Navbar
