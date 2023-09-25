import express from "express";
import {
    saveCreditCard,
    getCreditCardId,
    getCreditCard,
    updateCreditCard
} from "../controllers/creditCard_controller.js";

const creditCardRouter = express.Router();

creditCardRouter.post("/creditCard", saveCreditCard);
creditCardRouter.get("/creditCard/:id", getCreditCardId);
creditCardRouter.get("/creditCard", getCreditCard);
creditCardRouter.put("/creditCard/:id", updateCreditCard);


export default creditCardRouter;