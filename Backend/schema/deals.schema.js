import mongoose from "mongoose"

const deal = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    discount:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})

const Deal = mongoose.model("Deal",deal)

export default Deal;