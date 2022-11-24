import express from "express";
import { getCards, createCards, deleteCard } from "../models/index.js";
import cors from "cors";

const cardRouter = express.Router();

//PLAN:
//import function from models (charles)
//set up get function that handles the get request
//set up a POST function that handles post request

cardRouter.get("/", async (req, res) => {
	const cards = await getCards();
	res.status(200).json({ success: true, payload: cards });
});

cardRouter.post("/", async (req, res) => {
	const newCard = req.body;
	const result = await createCards(newCard);
	res.status(201).json({ success: true, payload: result });
});

cardRouter.delete("/:id", async (req, res) => {
	const id = req.params.id;
	const result = await deleteCard(id);
	res.status(200).json({ success: true, payload: result });
});

export default cardRouter;
