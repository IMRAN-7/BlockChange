import React from 'react'
import {Link} from "react-router-dom"

const NotFound = () => {
  return (
    <section className='notfound'>
      <div className='content'>
        <h1> 404 NOT FOUND</h1>
        <Link to='/' className='btn'> Back to Home Page</Link>
      </div>
      
    </section>
  )
}

export default NotFound
