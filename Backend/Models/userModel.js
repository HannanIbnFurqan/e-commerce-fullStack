import mongoose, { Types } from "mongoose";
import jwt from 'jsonwebtoken'
const {model, Schema} = mongoose

const Address = new Schema({
    houseNumber: {type: Number},
    city: {type: String},
    country: {type: String}
})

const userSchema = new Schema({
    userName: {type: String, required: true},
    email: {type: String, required: true, unique: true, min: [6, "Min 6 length"]},
    password: {type: String, required: true, unique: true},
    phoneNumber: {type: Number, min: [10], max: [12]},
    address: {type: [Address], default: []}

})


userSchema.pre('save', async function(next){
    let user = this
    if(this.isModified("password")) return next();

    try{

        const salt = await bcrypt.gentSalt(10);
        let hashedPassword = await bcrypt.hash(user.password, salt)
        user.password = hashedPassword
        next();

    }catch(error){
        next(error);
    }
})

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.comparePassword(password, this.password)
}

userSchema.methods.generateToken = function(){
    const token = jwt.sign({id: this_.id, email: this_.email}, process.env.PRIVATE_KEY)
    return token;
}

let User = model('User', userSchema);

export default User