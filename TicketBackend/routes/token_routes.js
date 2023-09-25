import express from "express";
import {
    savetoken,
    gettokenId,
    gettoken,
    updatetoken
} from "../controllers/token_controller.js";

const tokenRouter = express.Router();

tokenRouter.post("/token", savetoken);
tokenRouter.get("/token/:id", gettokenId);
tokenRouter.get("/token", gettoken);
tokenRouter.put("/token/:id", updatetoken);


export default tokenRouter;