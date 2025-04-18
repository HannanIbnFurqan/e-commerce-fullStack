import express from 'express';
import {signIn, signUp, getUser, updateUser, logOut} from "../Controllers/userController.js"
const router = express.Router();

router
.post("/signUp", signUp)
.post("/signIn", signIn)
.patch("/updateUser", updateUser)
.get("/getUser", getUser)
.delete("/logOut", logOut)


export default router