import jwt from "jsonwebtoken";
import { SESSION_SECRET } from "../config.js";

export const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, SESSION_SECRET);
    return decoded;
  } catch (error) {
    throw new Error("Invalid token");
  }
};
