import React from 'react'
import { FaShoppingCart  } from "react-icons/fa";


function Navbar() {
  return (
    <div className='navbar'>
   <h1> We are all <br/> Elemental</h1>
    
    <div >
        <ul className='right-nav' >
            <li className='text-primary'>Shop</li>
            <li className='text-primary'> About us</li>
            <li className='text-primary'>My workbooks</li>
            <button className="btn btn-light">Login</button>
            <button  className="btn btn-primary">Sign up</button>
            <p><FaShoppingCart/></p>
        </ul>
    </div>
      
    </div>
  )
}

export default Navbar
