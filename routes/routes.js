import express  from "express";
import { getCards, createCards } from "../models/index.js";

const cardRouter = express.Router();

//PLAN: 
//import function from models (charles)
//set up get function that handles the get request
//set up a POST function that handles post request

cardRouter.get("/", async (req, res)=> {
    const cards = await getCards()
    res.status(200).json({ success: true, payload: cards })
})

cardRouter.post("/", async (req, res)=> {
    const newCard = req.body
    const result = await createCards(newCard)
    res.status(201).json({ success: true, payload: result })
})



export default cardRouter;
