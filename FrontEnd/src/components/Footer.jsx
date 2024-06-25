import React from 'react'
import {Link} from "react-router-dom"
import { FaLinkedin, FaYoutube } from "react-icons/fa"; 
const Footer = () => {
  return (
    <footer>
      <div> <img src='/logo.png' alt='logo'></img></div>
      <div>
      <h4> Support </h4>
      <ul>
        <li>Lucknow, Uttar Pradesh, India</li>
        <li>mirzamohdimran110@gmail.com</li>
      </ul>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul>
          <li><Link to='/'> Home </Link></li>
          <li><Link to='/about'> About </Link></li>
          <li><Link to='/donate'> Donate </Link></li>
          <li><Link to='/contact'> Contact </Link></li>
        </ul>
      </div>
      <div>
        <h4>Follow Us</h4>
        <ul>
          <li><Link to="https://www.linkedin.com/in/mohammad-imran-661b95200/"> <span><FaLinkedin/></span><span>Linkedin</span> </Link> </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
