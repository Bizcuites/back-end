import express from "express";
import {
  getUser,
  getCustomers,
  getDashboardStats,
} from "../Controllers/generalControllers.js";

const router = express.Router();
router.get("/user/:id", getUser);
router.get("/customers", getCustomers);
router.get("/dashboards", getDashboardStats);

export default router;
