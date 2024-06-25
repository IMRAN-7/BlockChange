import React from 'react'
import { Link } from "react-router-dom";

const Hero = () => {
  return (
   <section className='hero'>
    <div className='banner'>
        <h1>Volunteers</h1>
        <h3> Needed </h3>
        <p>Welcome!
        Join us in making a difference with secure and easy cryptocurrency donations. Whether you're passionate about education, clean water, healthcare, or environmental conservation, your contributions can create real change. Our platform ensures that your donations are fast, transparent, and impactful. Select a cause, donate using your favorite cryptocurrency, and track the impact of your generosity in real-time. Together, we can build a better future. Start your journey with us today!</p>
       <Link to={"/donate"} className='btn'> 
       Donate Now
       </Link>
   </div>
   <div className='banner'>
    <img src="/Hero.jpg" alt='Hero'></img>
   </div>
    </section>
  )
}

export default Hero
