import express from "express";
import {
    saveOt,
    getOtId,
    getOt,
    updateOt
} from "../controllers/ot_controller.js";

const otRouter = express.Router();

otRouter.post("/ot", saveOt);
otRouter.get("/ot/:id", getOtId);
otRouter.get("/ot", getOt);
otRouter.put("/ot/:id", updateOt);


export default otRouter;