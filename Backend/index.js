import express from "express"
import dotenv from "dotenv"
import connectDB from "./db.js";
import userRoutes from "./routes/authentication/user.js"
import bodyParser from "body-parser"


dotenv.config();
const app=express();
const PORT=process.env.PORT || 3000;

connectDB();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))

app.use("/api/user",userRoutes)





app.listen(PORT,(req,res)=>{
    console.log(`Server is runnning on ${PORT}`);
})