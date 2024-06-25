import React, { useState } from 'react'
import {Link} from "react-router-dom"
import {FaBitcoin,FaYoutube,FaSquareGithub} from "react-icons/fa6"
import {BsLinkedin} from "react-icons/bs"
import {GiHamburgerMenu} from "react-icons/gi"


const Navbar = () => {
  const [show,setshow]=useState(false);
  return  <>
      <nav className={show ? "navbar navbar_show" : "navbar"}> 
        <div className='logo'>
          < img src='/logo.png' alt='logo'/>
        </div>
        <div className='links'>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/donate'>Donate Us</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
          <ul>
            <li><Link to={'/'}></Link><FaBitcoin/></li>
          </ul>
        </div>
        <GiHamburgerMenu className='hamburger' onClick={() => setshow(!show)}/>
      </nav>

    </>
}

export default Navbar
