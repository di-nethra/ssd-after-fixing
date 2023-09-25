import {
    saveDriverService,
    getDriverIdService,
    getDriverService,
    updateDriverService
} from "../services/driver_services.js";

export const saveDriver = async (req, res) => {
    try {
        const Driver = await saveDriverService(req.body);
        res.send("Successfully created Driver");
    } catch (err) {
        res.send(err.message);
    }
};

export const getDriverId = async (req, res) => {
    try {
        const Driver = await getDriverIdService(req.params.id);
        res.json(Driver);
    } catch (err) {
        res.json(err.message);
    }
};

export const getDriver = async (req, res) => {
    try {
        const Driver = await getDriverService();
        res.json(Driver);
    } catch (err) {
        res.json(err.message);
    }
};

export const updateDriver = async (req, res) => {
    try {
        const Driver = await updateDriverService(req.params.id, req.body);
        res.json("Successfully updated Driver");
    } catch (err) {
        res.json(err.message);
    }
};