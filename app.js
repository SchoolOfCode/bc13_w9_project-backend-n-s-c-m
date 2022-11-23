import express from "express";
import logger from "morgan";
import cardRouter from "./routes/routes.js";
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use("/api/cards", cardRouter);

export default app;
