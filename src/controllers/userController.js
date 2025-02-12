import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { SESSION_SECRET } from "../config.js";
import { hashPassword } from "../utils/hashPassword.js";

export const createUser = async (req, res) => {
  try {
    const userData = new User(req.body);
    const { email, password } = userData;
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res
        .status(400)
        .json({ message: `User with email ${email} already exists` });
    }

    await hashPassword(userData);
    await userData.save();

    res.status(201).json({ message: "User created", userData });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (users.length === 0) {
      return res.status(204).json({ message: "There are no users" });
    }
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

export const updateUser = async (req, res) => {
  try {
    const _id = req.params.id;
    const userExist = await User.findOne({ _id });
    if (!userExist) {
      return res.status(400).json({ message: "User not found" });
    }

    if (req.body.password) {
      await hashPassword(req.body);
    }

    const updatedUser = await User.findByIdAndUpdate({ _id }, req.body, {
      new: true,
    });
    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error", error });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const _id = req.params.id;
    const userExist = await User.findOne({ _id });
    if (!userExist) {
      return res.status(404).json({ message: "User not found" });
    }

    await hashPassword(userExist);
    await User.findOneAndDelete({ _id });

    return res.status(200).json({
      message: "User deleted successfully",
      user: userExist,
    });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error", error });
  }
};

export const validate = async (req, res) => {
  try {
    if (!(req.body.email && req.body.password)) {
      return res.status(400).json({ message: "There's a missing field" });
    }
    const userFound = await User.findOne({ email: req.body.email });
    if (!userFound) {
      return res.status(400).json({ message: "User or password incorrect" });
    }

    if (bcrypt.compareSync(req.body.password, userFound.password)) {
      const payload = {
        userId: userFound._id,
        userEmail: userFound.email,
      };

      const token = jwt.sign(payload, SESSION_SECRET, {
        expiresIn: "1h",
      });

      return res.status(200).json({ message: "Logged in", token });
    } else {
      return res.status(400).json({ message: "User or password is incorrect" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Internal server error", error });
  }
};