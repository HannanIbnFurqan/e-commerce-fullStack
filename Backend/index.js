import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import dbConnect from './dbConnection/dbConnect.js';
import userRouter from './Routes/userRouter.js';

let server = express();
let PORT = process.env.PORT || 600; // fallback if env is not set

// Middlewares
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// Routes
server.use("/user", userRouter);

// DB Connection
dbConnect()
  .then(() => {
    console.log('DB connection successful');
    server.listen(PORT, () => {
      console.log('Server is running on port', PORT);
    });
  })
  .catch((err) => {
    console.log('DB connection error:', err);
  });
