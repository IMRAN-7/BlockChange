import mongoose from "mongoose"
import validator from "validator";

const messageSchema=new mongoose.Schema({
    name:
    {
        type:String,
        required:true,
        minLength:[3,"Name must contain atleast 3 characters"],
        maxLength:[30,"Name cannot exceed 30 characters"]
    },
    email:
    {
        type:String,
        required:true,
        validate:[validator.isEmail,"Provide a valid Email"]
    },
    phone:
    {
        type:String,
        required:true,
        minLength:[10,"Phone must contain exactly 10 digits"],
        maxLength:[10,"Phone must contain exactly 10 digits"]
    },
    message:
    {
        type:String,
        required:true
    },
})

export const Message=mongoose.model("Message",messageSchema);
