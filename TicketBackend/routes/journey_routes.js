import express from "express";
import {
    saveJourney,
    getJourneyId,
    getJourney,
    updateJourney
} from "../controllers/journey_controller.js";

const journeyRouter = express.Router();

journeyRouter.post("/journey", saveJourney);
journeyRouter.get("/journey/:id", getJourneyId);
journeyRouter.get("/journey", getJourney);
journeyRouter.put("/journey/:id", updateJourney);


export default journeyRouter;