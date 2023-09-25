import {
    savePassengerService,
    getPassengerIdService,
    getPassengerService,
    updatePassengerService
} from "../services/passenger_services.js";

export const savePassenger = async (req, res) => {
    try {
        const passenger = await savePassengerService(req.body);
        res.send("Successfully created Passenger");
    } catch (err) {
        res.send(err.message);
    }
};

export const getPassengerId = async (req, res) => {
    try {
        const passenger = await getPassengerIdService(req.params.id);
        res.json(passenger);
    } catch (err) {
        res.json(err.message);
    }
};

export const getPassenger = async (req, res) => {
    try {
        const passenger = await getPassengerService();
        res.json(passenger);
    } catch (err) {
        res.json(err.message);
    }
};

export const updatePassenger = async (req, res) => {
    try {
        const passenger = await updatePassengerService(req.params.id, req.body);
        res.json("Successfully updated passenger");
    } catch (err) {
        res.json(err.message);
    }
};