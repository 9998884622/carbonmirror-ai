import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "CarbonMirror AI Server Running 🚀",
  });
});

export default app;