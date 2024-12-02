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
            const token = jwt.sign({email:user.email,id:user._id},process.env.JWT_SECRET,{expiresIn:'1d'})
            return res.status(200).json({message:"Login Successful",token,id:user._id,name:user.name})
        }
    } catch (error) {
        console.log(error)
        return res.status(400).json({message:"Server Error"})
    }
})

// Middleware to authenticate the token (for protected routes)
const authenticateToken = (req, res, next) => {
    const token = req.headers["authorization"]?.split(" ")[1]; // Bearer token

    if (!token) {
        return res.status(401).json({ message: "Access denied. No token provided." });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: "Invalid token." });
        }
        req.user = user;
        next(); // Proceed to the next middleware or route handler
    });
};

// Update user details route
router.put("/update", authenticateToken, async (req, res) => {
    try {
        const { name, email, phone } = req.body;
        const { id } = req.user; // Get the user ID from the token

        // Validate fields
        if (!name && !email && !phone) {
            return res.status(400).json({ message: "Please provide fields to update." });
        }

        const updatedData = {};
        if (name) updatedData.name = name;
        if (email) updatedData.email = email;
        if (phone) updatedData.phone = phone;

        // Update the user profile in the database
        const updatedUser = await User.findByIdAndUpdate(id, updatedData, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found." });
        }

        res.status(200).json({ message: "Profile updated successfully", updatedUser });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "Server Error" });
    }
});

// GET /profile endpoint to fetch user details
router.get("/profile", authenticateToken, async (req, res) => {
    try {
      const userId = req.user.id; // Extract user ID from token
      const user = await User.findById(userId).select("-password"); // Exclude password field
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  });

export default router
