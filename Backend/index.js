//const express=require("express"); if we do not use type:module then we can require like this
//const dotenv=require("dotenv");

//or like normal react importing
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import cors from "cors";
import userRoute from "./route/user.route.js";
import bodyParser from 'body-parser';



const app=express();

dotenv.config();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT=process.env.PORT || 4000;
const URI=process.env.MongoDBURI;
    
app.use(express.json());
//mongdb connection
try{
mongoose.connect(URI,{
    useNewUrlParser: true, useUnifiedTopology: true 
});
console.log("connected to mongo");
}catch(error){
console.error("error");
}



//define routes 
app.use("/book" ,bookRoute);

app.use("/user",userRoute);

app.listen(PORT,()=>{
    console.log("this is running")
});