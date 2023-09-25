import {
    saveJourneyService,
    getJourneyIdService,
    getJourneyService,
    updateJourneyService
} from "../services/journey_service.js";

export const saveJourney = async (req, res) => {
    try {
        const Journey = await saveJourneyService(req.body);
        res.send("Successfully created Journey");
    } catch (err) {
        res.send(err.message);
    }
};

export const getJourneyId = async (req, res) => {
    try {
        const Journey = await getJourneyIdService(req.params.id);
        res.json(Journey);
    } catch (err) {
        res.json(err.message);
    }
};

export const getJourney = async (req, res) => {
    try {
        const Journey = await getJourneyService();
        res.json(Journey);
    } catch (err) {
        res.json(err.message);
    }
};

export const updateJourney = async (req, res) => {
    try {
        const Journey = await updateJourneyService(req.params.id, req.body);
        res.json("Successfully updated Journey");
    } catch (err) {
        res.json(err.message);
    }
};