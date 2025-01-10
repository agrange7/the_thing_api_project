import Film from "../models/filmsModel.js";

export const getFilms = async (req, res) => {
  try {
    const films = await Film.find().populate("genre");
    if (films.length === 0) {
      return res.status(400).json({ message: "There are no films" });
    }

    return res.status(200).json(films);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

export const createFilm = async (req, res) => {
  try {
    const filmData = new Film(req.body);
    const { name } = filmData;
    const filmExist = await Film.findOne({ name });

    if (filmExist) {
      return res.status(400).json({ message: `Film ${name} already exists` });
    }
    const savedFilm = await filmData.save();
    return res.status(200).json(savedFilm);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

export const findFilmByName = async (req, res) => {
  try {
    const name = req.body.name;
    const parsedName = name.trim().toLowerCase();
    const filmExist = await Film.findOne({ name: parsedName });
    if (!filmExist) {
      return res.status(400).json({ message: `Film ${name} doesn't exist` });
    }
    return res.status(200).json({ filmExist });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

export const findFilmById = async (req, res) => {
  try {
    const _id = req.params._id;
    const filmExist = await Film.findOne({ _id });
    if (!filmExist) {
      return res.status(400).json({ message: `Film ${_id} doesn't exist` });
    }
    return res.status(200).json({ filmExist });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

export const updateFilm = async (req, res) => {
  try {
    const _id = req.params.id;
    const filmExist = await Film.findOne({ _id });
    if (!filmExist) {
      return res
        .status(400)
        .json({ message: "Film you're trying to update does not exist" });
    }
    const updateFilm = await Film.findByIdAndUpdate({ _id }, req.body, {
      new: true,
    });
    res.status(201).json(updateFilm);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

export const deleteFilm = async (req, res) => {
  try {
    const id = req.params.id;
    const filmExist = await Film.findOne({ _id: id });
    if (!filmExist) {
      return res.status(404).json({ message: "Film not found" });
    }

    await Film.findByIdAndDelete(id);
    res.status(201).json({ message: "Film deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};
