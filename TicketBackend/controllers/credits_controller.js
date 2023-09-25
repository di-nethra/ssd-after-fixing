import {
    saveCreditService,
    getCreditIdService,
    getCreditService,
    updateCreditService
} from "../services/credits_service.js";

export const saveCredit = async (req, res) => {
    try {
        const Credit = await saveCreditService(req.body);
        res.send("Successfully created Credit");
    } catch (err) {
        res.send(err.message);
    }
};

export const getCreditId = async (req, res) => {
    try {
        const Credit = await getCreditIdService(req.params.id);
        res.json(Credit);
    } catch (err) {
        res.json(err.message);
    }
};

export const getCredit = async (req, res) => {
    try {
        const Credit = await getCreditService();
        res.json(Credit);
    } catch (err) {
        res.json(err.message);
    }
};

export const updateCredit = async (req, res) => {
    try {
        const Credit = await updateCreditService(req.params.id, req.body);
        res.json("Successfully updated Credit");
    } catch (err) {
        res.json(err.message);
    }
};