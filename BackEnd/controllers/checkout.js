import axios from "axios"
import crypto from "crypto"
import {Volunteer} from "../models/volunteer.js"

//Base URL
const cryptomus=axios.create({baseURL:"https://api.cryptomus.com/v1"})

const createInvoice =async(amount)=>{
    try{
       const data={
        amount:amount,
        currency:"USD",
        order_id:crypto.randomBytes(12).toString("hex"),
        url_return:"https://block-change-qjme.vercel.app/donate",
        url_success:"https://block-change-qjme.vercel.app/",
        lifetime:300,
    };
    const sign=crypto.createHash("md5").update(Buffer.from(JSON.stringify(data)).toString("base64")+process.env.PAYMENT_API_KEY)
    
 } catch(error)
    {

    }

}