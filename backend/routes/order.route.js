import { Router } from "express";
import { createOrderController } from "../controller/order.controller.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";

export const orderRouter = Router();

orderRouter.post("/create", isAuthenticated, createOrderController);
