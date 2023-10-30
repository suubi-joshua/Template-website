import React from 'react'
import Logo from '../Assests/Logo.png'
import {Link} from 'react-router-dom'
import "../Styles/NavBar.css"

function NavBar() {
  return (
    <div className='navbar'>
        <div className='leftside'>
            <img src={Logo} alt=''/>
        </div>
        <div className='rightside'>
            <Link to="/"> Home </Link>
            <Link to="/menu"> Menu </Link>
            <Link to="/about"> About </Link>
            <Link to="/contact"> Contact </Link>
        </div>
      
    </div>
  )
}

export default NavBar
