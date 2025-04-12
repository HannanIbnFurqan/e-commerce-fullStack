import mongoose from "mongoose";

let  dbConnect  = async ()=>{
 return await  mongoose.connect(process.env.mongoose_url)
}

export default dbConnect