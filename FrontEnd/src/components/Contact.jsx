import React, { useState } from 'react'

const Contact = () => {
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[phone,setPhone]=useState("");
  const[message,setMessage]=useState("");
  const handleSendMessage=(e)=>
  {
    e.preventDefault();
  };
  return (
    <section className='contact'>
      <div className="container">
        <div className="banner">
    <form onSubmit={handleSendMessage}>
     <h2>Contact Us</h2>
     <div>
      <input type='text' value={name} placeholder='Your Name' onChange={(e)=> setName(e.target.value)} ></input>
      <input type='email' value={email} placeholder='Your Email' onChange={(e)=> setEmail(e.target.value)}  ></input>
      <input type='number' value={phone} placeholder='Phone No.' onChange={(e)=> setPhone(e.target.value)} ></input>
     </div>
     <textarea rows='10' value={message} placeholder='Message Us' onChange={(e)=> setMessage(e.target.value)}></textarea>
    <button className='btn' type='submit'>Send Message</button>
   
    </form>
        </div>
      </div>
</section>
  )
}

export default Contact
