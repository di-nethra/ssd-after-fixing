import {
    savetokenService,
    gettokenIdService,
    gettokenService,
    updatetokenService
} from "../services/token_service.js";

export const savetoken = async (req, res) => {
    try {
        const token = await savetokenService(req.body);
        res.send("Successfully created token");
    } catch (err) {
        res.send(err.message);
    }
};

export const gettokenId = async (req, res) => {
    try {
        const token = await gettokenIdService(req.params.id);
        res.json(token);
    } catch (err) {
        res.json(err.message);
    }
};

export const gettoken = async (req, res) => {
    try {
        const token = await gettokenService();
        res.json(token);
    } catch (err) {
        res.json(err.message);
    }
};

export const updatetoken = async (req, res) => {
    try {
        const token = await updatetokenService(req.params.id, req.body);
        res.json("Successfully updated token");
    } catch (err) {
        res.json(err.message);
    }
};