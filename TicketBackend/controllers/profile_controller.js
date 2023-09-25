import {
    saveUserService,
    getUserIdService,
    getUserService,
    updateUserService,
    deleteUserIdService
} from "../services/profile_service.js";

export const saveUser = async (req, res) => {
    try {
        const User = await saveUserService(req.body);
        res.send("Successfully created User");
    } catch (err) {
        res.send(err.message);
    }
};

export const getUserId = async (req, res) => {
    try {
        const User = await getUserIdService(req.params.id);
        res.json(User);
    } catch (err) {
        res.json(err.message);
    }
};

export const getUser = async (req, res) => {
    try {
        const User = await getUserService();
        res.json(User);
    } catch (err) {
        res.json(err.message);
    }
};

export const updateUser = async (req, res) => {
    try {
        const User = await updateUserService(req.params.id, req.body);
        res.json("Successfully updated User");
    } catch (err) {
        res.json(err.message);
    }
};

export const deletUserId = async (req, res) => {
    try {
        const User = await deleteUserIdService(req.params.id);
        res.json("Successfully deleted User");
    } catch (err) {
        res.json(err.message);
    }
};