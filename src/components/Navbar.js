import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import { useSelector } from 'react-redux'
import "./Navbar.css"

const Navbar = () => {
    const {amount} = useSelector((store) => store.cart);
  return (
    <div>
      <nav className='nav-bar'>
            <h1>Redux Toolkit</h1>
        <div className='nav-cart'>
          <div className='logo'>
          <FaShoppingCart/>    
          </div>
        <span className='bag-quantity'>{amount}</span>   
        </div>
        
      </nav>
    </div>
  )
}

export default Navbar
