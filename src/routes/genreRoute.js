import { Router } from "express";
import {
  createGenre,
  getGenres,
  updateGenre,
  deleteGenre,
  findGenreById,
} from "../controllers/genreController.js";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware.js";

const genreRoute = Router();

genreRoute.post("/create", verifyTokenMiddleware, createGenre);
genreRoute.get("/get", getGenres);
genreRoute.get("/get-by-id/:id", verifyTokenMiddleware, findGenreById);
genreRoute.put("/update/:id", verifyTokenMiddleware, updateGenre);
genreRoute.delete("/delete/:id", verifyTokenMiddleware, deleteGenre);

export default genreRoute;
