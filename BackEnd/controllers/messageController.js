import {Message} from "../models/message.js"



export const postMessage=async(req,res,next)=>{
    const {name,email,phone,message}=req.body;
    if(!name || !email || !phone || !message)
        {
            return res.status(400).json({
                success:false,
                message:"Please fill full from"
            });
        }
        try{
            await Message.create({name,email,phone,message});
            return res.status(201).json({
              success:true,
              message:"Message sent Successfully",
            });
        }
        catch(error)
        {
        if(error.name==="ValidationError")
            {
            const ValidationErrors=Object.values(error.errors).map(err=>err.message);
            const errorMessage = ValidationErrors.join(", ");
            return res.status(400).json({
                success:false,
                message:errorMessage,
            });
        }
        return res.status(500).join({
            success:false,
            message:"Internal server Error",
        });
        }
}
