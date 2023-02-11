import express from "express";
import { getProducts, getGeography } from "../Controllers/clientControllers.js";
const router = express.Router();

router.get("/products", getProducts);
router.get("/geographys", getGeography);

export default router;
