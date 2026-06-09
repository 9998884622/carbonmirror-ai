import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";

import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";
import carbonRoutes from "./routes/carbonRoutes";

const app = express();

// JSON parser
app.use(express.json());

// CORS (deployment safe)
app.use(
  cors({
    origin: "*",
    credentials: true
  })
);

// Security headers
app.use(
  helmet({
    crossOriginResourcePolicy: false
  })
);

// Logger
app.use(morgan("dev"));

// Rate limiting (prevents abuse)
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 100
  })
);

// Health check route
app.get("/", (_, res) => {
  res.json({
    success: true,
    message: "CarbonMirror AI API Running"
  });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/carbon", carbonRoutes);

export default app;
