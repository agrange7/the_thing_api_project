import express from "express";
import { PORT, SESSION_SECRET } from "./config.js";
import { connectDB } from "./db.js";
import userRoute from "./routes/userRoute.js";
import genreRoute from "./routes/genreRoute.js";
import filmsRoute from "./routes/filmsRoute.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import session from "express-session";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());

app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUnintialized: false,
  })
);

connectDB();

app.use("/api/user", userRoute);
app.use("/api/genre", genreRoute);
app.use("/api/films", filmsRoute);

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
