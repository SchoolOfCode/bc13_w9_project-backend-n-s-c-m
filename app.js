import express from "express";
import logger from "morgan";
import cardRouter from "./routes/routes.js";
import cors from "cors";

const app = express();
app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use("/api/cards", cardRouter);

export default app;
