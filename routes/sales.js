import express from "express";
import { getSales } from "../Controllers/salesControllers.js";

const router = express.Router();

router.get("/sales", getSales);

export default router;
