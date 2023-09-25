import {
    saveOtService,
    getOtIdService,
    getOtService,
    updateOtService
} from "../services/ot_service.js";

export const saveOt = async (req, res) => {
    try {
        const Ot = await saveOtService(req.body);
        res.send("Successfully created Ot");
    } catch (err) {
        res.send(err.message);
    }
};

export const getOtId = async (req, res) => {
    try {
        const Ot = await getOtIdService(req.params.id);
        res.json(Ot);
    } catch (err) {
        res.json(err.message);
    }
};

export const getOt = async (req, res) => {
    try {
        const Ot = await getOtService();
        res.json(Ot);
    } catch (err) {
        res.json(err.message);
    }
};

export const updateOt = async (req, res) => {
    try {
        const Ot = await updateOtService(req.params.id, req.body);
        res.json("Successfully updated Ot");
    } catch (err) {
        res.json(err.message);
    }
};