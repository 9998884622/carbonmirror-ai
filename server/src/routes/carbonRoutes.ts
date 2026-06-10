import { Router } from "express";

import {
  calculateCarbon
} from "../controllers/carbonController.js";

import {
  protect
} from "../middleware/authMiddleware.js";

const router = Router();

router.post(
  "/calculate",
  protect,
  calculateCarbon
);

export default router;
