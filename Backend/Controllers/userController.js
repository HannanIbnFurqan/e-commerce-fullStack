import User from "../Models/userModel.js"
import bcrypt from "bcrypt"

const cookieOption = {
    httpOnly: true,
    secure: true
}

const signUp = async (req, res) => {
    const { userName, email, password, phoneNumber, address } = req.body
    try {
        const existingUser = await User.findOne({ email: email })
        if (existingUser) {
            return res.status(403).send({ result: false, message: "User alerdy exist" })
        }

        const newUser = new User(req.body)

        const userData = await newUser.save()
        
        const token = newUser.generateToken()
        res.status(200).cookie("token", token, cookieOption).send({ result: true, message: "User Create Successfully", UserData: userData })

    } catch (error) {
        console.log(error)
    }
}

const signIn = async (req, res) => {
    const {email, password} = req.body
    try {

        const newUser = await User.findOne({email})
        
        if(!newUser){
            return res.status(404).send({result: false, message: "User not found. Please sign up first."})
        }

        const isMatch = await bcrypt.compare(password, newUser.password)

        if(!isMatch){
            return res.status(401).send({result: false, message: "Invalid password and email"})
        }
         const token  = newUser.generateToken()
        return res.status(200).cookie("token", token).send({result: true, message: "User Successfully Login"})

        
    } catch (error) {
        return res.status(404).send({result: false, message: error.message})
    }
}

const updateUser = (req, res) => { 
    const {} = req.body
}

const getUser = async (req, res) => {
    const {email} = req.body

    try {
        const newUser =  await User.findOne({email})
        if(!newUser){
            return res.status(404).send({result: false, message: "user not found"})
        }
       return res.status(200).send({result: true, message: "user find successfully", newUser})

        
    } catch (error) {
        return res.status(404).send({result: false, message: error})
    }
 }

const logOut = (req, res) => { }


export { signIn, signUp, updateUser, getUser, logOut }