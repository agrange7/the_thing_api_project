import { Router } from "express";
import {
  createGenre,
  getGenres,
  updateGenre,
  deleteGenre,
} from "../controllers/genreController.js";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware.js";

const genreRoute = Router();

genreRoute.post("/create", verifyTokenMiddleware, createGenre);
genreRoute.get("/get", verifyTokenMiddleware, getGenres);
genreRoute.put("/update/:id", verifyTokenMiddleware, updateGenre);
genreRoute.put("/delete/:id", verifyTokenMiddleware, deleteGenre);

export default genreRoute;
