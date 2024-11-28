import express from "express"
import dotenv from "dotenv"
import User from "../../schema/user.schema.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


dotenv.config()

const router = express.Router()

router.post("/register", async (req, res) => {
    try {
        const { name, email, phone, password } = req.body
        //validate all fields are required
        if (!email || !password || !phone || !name) {
            return res.status(400).json({ message: "All fields are required." })
        }
        const userExist = await User.findOne({ email })
        if (userExist) {
            return res.status(400).json({ message: "User already exists. Please Login" })
        } else {
            const hashedPassword = bcrypt.hashSync(password, 10)
            const newUser = new User({ name, email, phone, password: hashedPassword })
            await newUser.save()
            const token = jwt.sign({ email: newUser.email, id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' })
            return res.status(200).json({ message: "User created successfully", token, id: newUser._id })
        }

    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "Server Error" })
    }
})

router.post("/login",async(req,res)=>{
    try {
        const {email,password} = req.body
        const user = await User.findOne({email:email})
        if(!user){
            return res.status(400).json({message:"Invalid user or password"})
        }else{
            const passwordCorrect = await bcrypt.compare(password,user.password)
            if(!passwordCorrect){
                return res.status(400).json({message:"Invalid email or password"})
            }
            const token = jwt.sign({email:user.email,id:user._id},process.env.JWT_SECRET,{expiresIn:'1h'})
            return res.status(200).json({message:"Login Successful",token,id:user._id,name:user.name})
        }
    } catch (error) {
        console.log(error)
        return res.status(400).json({message:"Server Error"})
    }
})

export default router
