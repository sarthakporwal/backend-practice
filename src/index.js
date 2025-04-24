// require('dotenv').config({path: './.env'});
import dotenv from "dotenv";


import connectDB from "./db";

dotenv.config({
    path: "./.env"
})


connectDB()



/*
import express from "express";

const app = express()

( async () => {
    try{
       await mongoose.connect(`${process.env.MONGODB_URL}`)
       app.on("error", (error) => {
        console.log("ERROR : ", error);
        throw error
       })

       app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
       })
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error
    }
})()
*/


