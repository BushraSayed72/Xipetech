import React, { useState } from 'react'
import { FaShoppingCart  } from "react-icons/fa";
import vector6 from '../Images/Vector (6).png';


function Navbar() {
  const [isNavbarClicked, setIsNavbarClicked] = useState(false)
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
    <div className='navbar'>
    <div className='greenFlat'></div>
    <div className='greenCircle'></div>
    <div className='blueCircle'></div>
   <img src={vector6} className='heading'/> 
   <div className='halfsemicircle'></div>
    
      
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setIsNavbarClicked(!isNavbarClicked)}>
      <span className="navbar-toggler-icon"></span>
    </button>
   <div className={`${!isNavbarClicked ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
        <ul className='right-nav navbar-nav me-auto mb-2 mb-lg-0' >
            <li className='text-primary'>Shop</li>
            <li className='text-primary'> About us</li>
            <li className='text-primary'>My workbooks</li>
            <button className="btn btn-light">Login</button>
            <button  className="btn btn-primary">Sign up</button>
            <p><FaShoppingCart className='nav-icon'/></p>
        </ul>
    </div>
    </div>
      </nav>
  )
}

export default Navbar
