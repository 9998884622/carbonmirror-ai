import { Router } from "express";

import {
  protect,
  AuthRequest
} from "../middleware/authMiddleware.js";

const router = Router();

router.get(
  "/profile",
  protect,
  async (req: AuthRequest, res) => {
    res.json({
      success: true,
      user: req.user
    });
  }
);

export default router;
