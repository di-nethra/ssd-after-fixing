import {
    createPassengerRepo,
    getPassengerByIdRepo,
    getPassengerRepo,
    updatePassengerRepo
} from "../repository/passenger_repo.js";

export const savePassengerService = async (data) => {
    const { name, email } = data;
    try {
        await createPassengerRepo({ name, email });
        return Promise.resolve("Successfully saved passenger.");
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const getPassengerIdService = async (id) => {
    try {
        const passenger = await getPassengerByIdRepo(id);
        return Promise.resolve(passenger);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const getPassengerService = async () => {
    try {
        const passenger = await getPassengerRepo();
        return Promise.resolve(passenger);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const updatePassengerService = async (id, data) => {
    try {
        const passenger = await updatePassengerRepo(id, data);
        return Promise.resolve(passenger);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};