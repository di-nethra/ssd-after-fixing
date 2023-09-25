import express from "express";
import {
    saveTickets,
    getTicketsId,
    getTickets,
    updateTickets
} from "../controllers/tickets_controller.js";

const ticketsRouter = express.Router();

ticketsRouter.post("/tickets", saveTickets);
ticketsRouter.get("/tickets/:id", getTicketsId);
ticketsRouter.get("/tickets", getTickets);
ticketsRouter.put("/tickets/:id", updateTickets);


export default ticketsRouter;