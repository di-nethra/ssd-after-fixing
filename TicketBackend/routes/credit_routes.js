import express from "express";
import {
    saveCredit,
    getCreditId,
    getCredit,
    updateCredit
} from "../controllers/credits_controller.js";

const creditRouter = express.Router();

creditRouter.post("/credit", saveCredit);
creditRouter.get("/credit/:id", getCreditId);
creditRouter.get("/credit", getCredit);
creditRouter.put("/credit/:id", updateCredit);


export default creditRouter;