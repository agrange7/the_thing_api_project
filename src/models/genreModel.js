import mongoose from "mongoose";

const genreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Genre is required"],
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 1,
    maxLength: 50,
  },
});

export default mongoose.model("genre", genreSchema);
