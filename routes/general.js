import express from "express";
import { getUser, getCustomers } from "../Controllers/generalControllers.js";

const router = express.Router();
router.get("/user/:id", getUser);
router.get("/customers", getCustomers);

export default router;
