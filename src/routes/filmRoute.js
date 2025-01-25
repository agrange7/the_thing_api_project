import { Router } from "express";
import {
  createFilm,
  getFilms,
  findFilmByName,
  findFilmById,
  updateFilm,
  deleteFilm,
} from "../controllers/filmController.js";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware.js";

const filmRoute = Router();

filmRoute.get("/get", verifyTokenMiddleware, getFilms);
filmRoute.get("/get-by-id/:id", verifyTokenMiddleware, findFilmById);
filmRoute.post("/get-by-name", verifyTokenMiddleware, findFilmByName);
filmRoute.post("/create", verifyTokenMiddleware, createFilm);
filmRoute.put("/update/:id", verifyTokenMiddleware, updateFilm);
filmRoute.delete("/delete/:id", verifyTokenMiddleware, deleteFilm);

export default filmRoute;
