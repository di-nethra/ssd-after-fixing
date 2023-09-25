import {
    savebusService,
    getbusIdService,
    getbusService,
    updatebusService
} from "../services/bus_service.js";

export const savebus = async (req, res) => {
    try {
        const bus = await savebusService(req.body);
        res.send("Successfully created bus");
    } catch (err) {
        res.send(err.message);
    }
};

export const getbusId = async (req, res) => {
    try {
        const bus = await getbusIdService(req.params.id);
        res.json(bus);
    } catch (err) {
        res.json(err.message);
    }
};

export const getbus = async (req, res) => {
    try {
        const bus = await getbusService();
        res.json(bus);
    } catch (err) {
        res.json(err.message);
    }
};

export const updatebus = async (req, res) => {
    try {
        const bus = await updatebusService(req.params.id, req.body);
        res.json("Successfully updated bus");
    } catch (err) {
        res.json(err.message);
    }
};