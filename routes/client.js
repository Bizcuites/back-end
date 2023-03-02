import express from "express";
import {
  getProducts,
  getTransactions,
  getGeography,
} from "../Controllers/clientControllers.js";
const router = express.Router();

router.get("/products", getProducts);
router.get("/transactions", getTransactions);
router.get("/geographys", getGeography);

export default router;
