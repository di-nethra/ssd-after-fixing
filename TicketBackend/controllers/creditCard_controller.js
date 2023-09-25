import {
    saveCrediCardtService,
    getCrediCardtIdService,
    getCrediCardtService,
    updateCrediCardtService
} from "../services/creditCard_services.js";

export const saveCreditCard = async (req, res) => {
    try {
        const CreditCard = await saveCrediCardtService(req.body);
        res.send("Successfully created CreditCard");
    } catch (err) {
        res.send(err.message);
    }
};

export const getCreditCardId = async (req, res) => {
    try {
        const CreditCard = await getCrediCardtIdService(req.params.id);
        res.json(CreditCard);
    } catch (err) {
        res.json(err.message);
    }
};

export const getCreditCard = async (req, res) => {
    try {
        const CreditCard = await getCrediCardtService();
        res.json(CreditCard);
    } catch (err) {
        res.json(err.message);
    }
};

export const updateCreditCard = async (req, res) => {
    try {
        const CreditCard = await updateCrediCardtService(req.params.id, req.body);
        res.json("Successfully updated CreditCard");
    } catch (err) {
        res.json(err.message);
    }
};