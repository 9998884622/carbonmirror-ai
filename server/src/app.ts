import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";

import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";
import carbonRoutes from "./routes/carbonRoutes";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*"
  })
);

app.use(
  helmet({
    crossOriginResourcePolicy: false
  })
);

app.use(morgan("dev"));

app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 100
  })
);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "CarbonMirror AI API Running"
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/carbon", carbonRoutes);

export default app;
