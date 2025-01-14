import { Router } from "express";
import {
  createFilm,
  getFilms,
  findFilmByName,
  findFilmById,
  updateFilm,
  deleteFilm,
} from "../controllers/filmsController.js";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware.js";

const filmRoute = Router();

filmRoute.post("/create", verifyTokenMiddleware, createFilm);
filmRoute.get("/get", verifyTokenMiddleware, getFilms);
filmRoute.post("/get-by-name", verifyTokenMiddleware, findFilmByName);
filmRoute.get("/get-by-id/:id", verifyTokenMiddleware, findFilmById);
filmRoute.put("/update/:id", verifyTokenMiddleware, updateFilm);
filmRoute.delete("/delete/:id", verifyTokenMiddleware, deleteFilm);

export default filmRoute;
