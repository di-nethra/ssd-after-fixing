import express from "express";
import {
    savePassenger,
    getPassengerId,
    getPassenger,
    updatePassenger
} from "../controllers/passenger_controller.js";

const passengerRouter = express.Router();

passengerRouter.post("/passenger", savePassenger);
passengerRouter.get("/passenger/:id", getPassengerId);
passengerRouter.get("/passenger", getPassenger);
passengerRouter.put("/passenger/:id", updatePassenger);


export default passengerRouter;