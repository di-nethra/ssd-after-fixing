import express from "express";
import {
    savebus,
    getbusId,
    getbus,
    updatebus
} from "../controllers/bus_controller.js";

const busRouter = express.Router();

busRouter.post("/bus", savebus);
busRouter.get("/bus/:id", getbusId);
busRouter.get("/bus", getbus);
busRouter.put("/bus/:id", updatebus);


export default busRouter;