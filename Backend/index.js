import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import dbConnect from './dbConnection/dbConnect.js';
import userRouter from './Routes/userRouter.js';
let server = express();
let PORT =  6000;

// middleware
// it is used to read the data of req -> body
server.use(express.json()) 
// it will pare incoming data from url
server.use(express.urlencoded({extended: true}))
 
server.use("/user", userRouter)

dbConnect().then(()=>{
    console.log('dbConnection successfully')
}).catch((err)=>{
    console.log('server error', err)
})


server.listen((PORT)=>{
    console.log('Server is running on',`${PORT}`)
})
