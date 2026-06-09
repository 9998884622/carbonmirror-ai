import { Router } from "express";

import {
  calculateCarbon
} from "../controllers/carbonController";

import {
  protect
} from "../middleware/authMiddleware";

const router = Router();

router.post(
  "/calculate",
  protect,
  calculateCarbon
);

export default router;
