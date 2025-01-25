import Genre from "../models/genreModel.js";

export const createGenre = async (req, res) => {
  try {
    const name = req.body.name;
    const genreExist = await Genre.findOne({ name });
    if (genreExist) {
      return res.status(400).json({ message: "Genre already exist" });
    }
    const newGenre = new Genre({ name });
    const response = await newGenre.save();
    return res.status(201).json(response);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};
export const getGenres = async (req, res) => {
  try {
    const genres = await Genre.find();
    if (genres.length === 0) {
      return res.status(204).json({ message: "There are no genres" });
    }
    return res.status(200).json(genres);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

export const findGenreById = async (req, res) => {
  try {
    const _id = req.params.id;
    const genreExist = await Genre.findOne({ _id });
    if (!genreExist) {
      return res.status(400).json({ message: `Genre ${_id} doesn't exist` });
    }
    return res.status(200).json({ genreExist });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

export const updateGenre = async (req, res) => {
  try {
    const _id = req.params.id;
    const genreExist = await Genre.findOne({ _id });
    if (!genreExist) {
      return res
        .status(400)
        .json({ message: "Genre you're trying to update does not exist" });
    }
    const updateGenre = await Genre.findByIdAndUpdate({ _id }, req.body, {
      new: true,
    });
    res.status(201).json(updateGenre);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

export const deleteGenre = async (req, res) => {
  try {
    const _id = req.params.id;
    const genreExist = await Genre.findOne({ _id });
    if (!genreExist) {
      return res.status(400).json({ message: "Genre does not exist" });
    }
    const response = await Genre.findByIdAndDelete(_id);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};
