import mongoose from "mongoose";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'; //  import bcrypt properly

const { model, Schema } = mongoose;

const Address = new Schema({
  houseNumber: { type: Number },
  city: { type: String },
  country: { type: String }
});

const userSchema = new Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true, minlength: [6, "Min 6 length"] },
  password: { type: String, required: true }, 
  phoneNumber: { type: Number },
  address: { type: [Address], default: [] }
});

userSchema.pre('save', async function (next) {
  const user = this;
  if (!user.isModified("password")) return next(); //  fix logic (you want to hash only if it's modified)

  try {
    const salt = await bcrypt.genSalt(10); //  fixed typo (gentSalt -> genSalt)
    const hashedPassword = await bcrypt.hash(user.password, salt);
    user.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

// Compare password
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password); // ✅ correct method
};

// JWT token generator
userSchema.methods.generateToken = function () {
  const token = jwt.sign(
    { id: this._id, email: this.email }, // ✅ fixed `this_` to `this`
    process.env.PRIVATE_KEY,
    { expiresIn: '7d' } // optional: add expiry
  );
  return token;
};

const User = model('User', userSchema);

export default User;