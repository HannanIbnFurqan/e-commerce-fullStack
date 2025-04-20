import User from "../Models/userModel.js"


const signUp = async (req, res) => {
    const { userName, email, password, phoneNumber, address } = req.body
    try {
        const existingUser = await User.findOne({ email: email })
        if (existingUser) {
            return res.status(403).send({ result: false, message: "User alerdy exist" })
        }

        const newUser = new User(req.body)
        const userData = await newUser.save()
        res.status(200).send({ result: true, message: "User Create Successfully", UserData: userData })

    } catch (error) {
        console.log(error)
    }
}

const signIn = (req, res) => {
    res.send("this is my first function");
}

const updateUser = (req, res) => { }

const getUser = (req, res) => { }

const logOut = (req, res) => { }


export { signIn, signUp, updateUser, getUser, logOut }