import { Tickets } from "../models/tickets_model.js";

export const createTicketsRepo = (data) =>
Tickets.create(data)
        .then((Tickets) => {
            return Promise.resolve(Tickets);
        })
        .catch(() => {
            throw new Error("Internal server error.", 500);
        });

export const getTicketsByIdRepo = (id) =>
Tickets.findById(id)
        .then((Tickets) => {
            if (!Tickets) {
                throw new Error("Tickets not found.", 404);
            }
            return Promise.resolve(Tickets);
        })
        .catch(() => {
            throw new Error("Internal server error.", 500);
        });

export const getTicketsRepo = () =>
Tickets.find()
        .then((Tickets) => {
            return Promise.resolve(Tickets);
        })
        .catch(() => {
            throw new Error("Internal server error.", 500);
        });

export const updateTicketsRepo = (id, data) =>
Tickets.findByIdAndUpdate(id, data, { new: true })
        .then((Tickets) => {
            if (!Tickets) {
                throw new Error("Tickets not found.", 404);
            }
            return Promise.resolve(Tickets);
        })
        .catch(() => {
            throw new Error("Internal server error.", 500);
        });