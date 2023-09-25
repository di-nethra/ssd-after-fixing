import {
    saveTicketsService,
    getTicketsIdService,
    getTicketsService,
    updateTicketsService
} from "../services/tickets_service.js";

export const saveTickets = async (req, res) => {
    try {
        const Tickets = await saveTicketsService(req.body);
        res.send("Successfully created Tickets");
    } catch (err) {
        res.send(err.message);
    }
};

export const getTicketsId = async (req, res) => {
    try {
        const Tickets = await getTicketsIdService(req.params.id);
        res.json(Tickets);
    } catch (err) {
        res.json(err.message);
    }
};

export const getTickets = async (req, res) => {
    try {
        const Tickets = await getTicketsService();
        res.json(Tickets);
    } catch (err) {
        res.json(err.message);
    }
};

export const updateTickets = async (req, res) => {
    try {
        const Tickets = await updateTicketsService(req.params.id, req.body);
        res.json("Successfully updated Tickets");
    } catch (err) {
        res.json(err.message);
    }
};