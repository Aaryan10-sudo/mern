import { Router } from "express";
import {
  forgotPassword,
  loginUser,
  registerUser,
  resetPassword,
  verifyUser,
} from "../controller/user.controller.js";

export const userRouter = Router();

userRouter.post("/register", registerUser);
userRouter.get("/verify", verifyUser);
userRouter.post("/login", loginUser);
userRouter.post("/forgot-password", forgotPassword);
userRouter.patch("/reset-password", resetPassword);
