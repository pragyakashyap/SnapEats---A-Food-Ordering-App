import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        default: 'Male'
    },
    country:{
        type:String,
        default: 'India'
    }
})

//Create the model 
const User=mongoose.model('User',userSchema)
export default User