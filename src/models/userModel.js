import mongoose from "mongoose";
import { isGoodPassword } from "../utils/validators.js";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    maxlength: 20,
    minlength: 2,
    trim: true,
    lowercase: true,
  },

  password: {
    required: [true, "Password is required"],
    type: String,
    validate: {
      validator: (value) => {
        return isGoodPassword(value);
      },
      message:
        "Password must be between 6 and 12 characters, with at least one number, one upercase letter and one lowercase letter",
    },
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    maxlength: 30,
    minlength: 6,
    trim: true,
    lowercase: true,
    match: /^\S+@\S+\.\S+$/,
    unique: true,
  },

  dateOfBirth: {
    type: Date,
    required: [true, "Date of birth is required"],
  },

  favGenre: {
    type: String,
    required: [true, "Favorite genre is required"],
  },

  shareShortFilm: { type: String, minLength: 10, maxLength: 300 },

  registrationDate: {
    type: Date,
    default: Date.now(),
  },
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    try {
      this.password = await bcrypt.hash(this.password, 10);
      next();
    } catch (error) {
      next(error);
    }
  } else {
    next();
  }
});

export default mongoose.model("user", userSchema);
