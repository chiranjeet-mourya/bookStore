import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import cors from "cors"
import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"

const app = express();

app.use(cors());
app.use(express.json())

dotenv.config()

const port= process.env.PORT || 4000;
const url = process.env.MongoDB;

// connect to mongodb
try {
    mongoose.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });
    console.log("connection connect");
    
} catch (error) {
    console.log("Error",error);    
}

// define routes
app.use("/book",bookRoute)
app.use("/user",userRoute)

app.listen(port, () => {
  console.log(`server start at http://localhost:${port}`)
})
