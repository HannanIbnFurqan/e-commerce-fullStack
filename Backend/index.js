import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import dbConnect from './dbConnection/dbConnect.js';
let server = express();
let PORT =  6000;


 
dbConnect().then(()=>{
    console.log('dbConnection successfully')
}).catch((err)=>{
    console.log('server error', err)
})


server.listen((PORT)=>{
    console.log('Server is running on',`${PORT}`)
})
