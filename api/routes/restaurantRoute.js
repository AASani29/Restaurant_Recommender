import express from "express";
import { getRestaurants } from "../controllers/restaurantController.js";

const router = express.Router();

// Define routes
router.post("/search", getRestaurants);

export default router;
