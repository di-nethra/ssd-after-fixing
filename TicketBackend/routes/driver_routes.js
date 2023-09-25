import express from "express";
import {
    saveDriver,
    getDriverId,
    getDriver,
    updateDriver
} from "../controllers/driver_controller.js";

const driverRouter = express.Router();

driverRouter.post("/driver", saveDriver);
driverRouter.get("/driver/:id", getDriverId);
driverRouter.get("/driver", getDriver);
driverRouter.put("/driver/:id", updateDriver);


export default driverRouter;