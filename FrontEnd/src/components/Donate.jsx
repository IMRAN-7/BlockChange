import React, { useState } from 'react'

const Donate = () => {
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[message,setMessage]=useState("");
  const[amount,setamount]=useState();
  const[disableBtn,setDisableBtn] =useState(false);
  return (
    <section className='donate'>
      <form>
        <div>
          <img src='logo.png' alt='logo'/>
        </div>
        <div>
          <label>Show Your love for the Underprivileged</label>
          <input type="number" value={amount}  onChange={(e)=>setamount(e.target.value)} placeholder='Enter donation amount (USD)'/>
        </div>
        <input type="text" value={name}  onChange={(e)=>setName(e.target.value)} placeholder='Enter Name'/>
        <input type="email" value={email}  onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email'/>
        <input type="text" value={message}  onChange={(e)=>setMessage(e.target.value)} placeholder='Enter any Message you want to convey' />
        <button className='btn' type='submit'  disabled={disableBtn}> Donate {amount ? `$${amount}`:"$0"} 
        </button>
      </form>
      
    </section>
  )
}

export default Donate
