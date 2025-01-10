import mongoose from "mongoose";

const filmsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 50,
    lowercase: true,
    trim: true,
  },

  year: {
    type: Number,
    required: true,
  },

  genre: { type: mongoose.Schema.Types.ObjectId, ref: "genre", required: true },

  team: {
    director: { type: String, required: true, minLength: 1, maxLength: 250 },
    producers: { type: String, required: true, minLength: 1, maxLength: 250 },
    screenWriter: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 250,
    },
    originalWriter: { type: String, minLength: 1, maxLength: 250 },
    casting: { type: String, minLength: 1, maxLength: 250 },
    editor: { type: String, minLength: 1, maxLength: 250 },
    cinematography: { type: String, minLength: 1, maxLength: 250 },
    execProducers: { type: String, minLength: 1, maxLength: 250 },
    lighting: { type: String, minLength: 1, maxLength: 250 },
    cameraOperator: { type: String, minLength: 1, maxLength: 250 },
    productionDesign: { type: String, minLength: 1, maxLength: 250 },
    artDirection: { type: String, minLength: 1, maxLength: 250 },
    setDecoration: { type: String, minLength: 1, maxLength: 250 },
    specialEffects: { type: String, minLength: 1, maxLength: 250 },
    visualEffects: { type: String, minLength: 1, maxLength: 250 },
    stunts: { type: String, minLength: 1, maxLength: 250 },
    composer: { type: String, minLength: 1, maxLength: 250 },
    sound: { type: String, minLength: 1, maxLength: 250 },
    costumeDesign: { type: String, minLength: 1, maxLength: 250 },
    makeup: { type: String, minLength: 1, maxLength: 250 },
  },

  duration: {
    type: Number,
    required: true,
  },

  synopsis: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 200,
  },

  rating: {
    type: Number,
    min: 0.5,
    max: 5,
    validate: {
      validator: (value) => value % 0.5 === 0,
    },
  },

  cast: {
    type: String,
    required: true,
  },

  details: {
    studios: {
      type: Number,
      required: true,
    },

    language: {
      type: String,
      required: true,
    },

    country: {
      type: String,
      required: true,
    },
  },

  poster: {
    type: String,
    required: true,
    match: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/i,
  },

  trailer: {
    type: String,
    required: true,
    match: /^(https?:\/\/.*)/,
  },
});

export default mongoose.model("films", filmsSchema);
