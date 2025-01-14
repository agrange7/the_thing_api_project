import { verifyToken } from "../utils/verifyToken.js";

export const verifyTokenMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    console.log({ authHeader });
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(400).json({ message: "Access token was not provided" });
    }

    const token = authHeader.split(" ")[1];

    const decoded = verifyToken(token);

    console.log({ decoded });

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(400).json({ message: "Invalid access token", error });
  }
};
