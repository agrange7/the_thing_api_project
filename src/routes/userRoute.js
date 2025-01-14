import express from "express";
import {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
  validate,
} from "../controllers/userController.js";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware.js";

const userRoute = express.Router();

userRoute.post("/create", createUser);
userRoute.get("/get", getUsers);
userRoute.put("/update/:id", verifyTokenMiddleware, updateUser);
userRoute.delete("/delete/:id", verifyTokenMiddleware, deleteUser);
userRoute.post("/login", validate);

export default userRoute;
