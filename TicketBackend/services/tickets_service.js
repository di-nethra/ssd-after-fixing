import {
    createTicketsRepo,
    getTicketsByIdRepo,
    getTicketsRepo,
    updateTicketsRepo
} from "../repository/tickets_repo.js";

export const saveTicketsService = async (data) => {
    const { userName, journeyId, seats, bookedDate} = data;
    try {
        await createTicketsRepo({ userName, journeyId, seats, bookedDate});
        return Promise.resolve("Successfully saved Tickets.");
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const getTicketsIdService = async (id) => {
    try {
        const Tickets = await getTicketsByIdRepo(id);
        return Promise.resolve(Tickets);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const getTicketsService = async () => {
    try {
        const Tickets = await getTicketsRepo();
        return Promise.resolve(Tickets);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const updateTicketsService = async (id, data) => {
    try {
        const Tickets = await updateTicketsRepo(id, data);
        return Promise.resolve(Tickets);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};