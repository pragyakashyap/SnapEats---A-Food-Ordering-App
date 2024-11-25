import express from "express"
import dotenv from "dotenv"
import connectDB from "./db.js";
import userRoutes from "./routes/authentication/user.js"
import dealRoutes from "./routes/authentication/deals.js"
import bodyParser from "body-parser"
import cors from "cors"


dotenv.config();
const app=express();
const PORT=process.env.PORT || 3000;

const corsOptions = {
    origin: "http://localhost:5173", // Allow requests from your React frontend
    methods: "GET,POST,PUT,DELETE", // Specify allowed HTTP methods
    allowedHeaders: "Content-Type,Authorization" // Specify allowed headers
  };

connectDB();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))

app.use(cors(corsOptions));

app.use("/api/user",userRoutes)
app.use("/api/deals",dealRoutes)





app.listen(PORT,(req,res)=>{
    console.log(`Server is runnning on ${PORT}`);
})