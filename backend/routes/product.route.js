import { Router } from "express";
import {
  createProductController,
  deleteProductController,
  getAllProductController,
  getSpecificProductController,
  updateProductController,
} from "../controller/product.controller.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
import { isAuthorized } from "../middleware/isAuthorized.js";

export const productRouter = Router();
productRouter.post(
  "/create",
  isAuthenticated,
  isAuthorized(["admin"]),
  createProductController,
);
productRouter.get("/getAll", getAllProductController);
productRouter.get("/get/:id", getSpecificProductController); // "/:" lai dynamic routing bhanincha
productRouter.patch(
  "/update/:id",
  isAuthenticated,
  isAuthorized,
  updateProductController,
);
productRouter.delete(
  "/delete/:id",
  isAuthenticated,
  isAuthorized,
  deleteProductController,
);
