import {
    createOtRepo,
    getOtByIdRepo,
    getOtRepo,
    updateOtRepo
} from "../repository/ot_repo.js";

export const saveOtService = async (data) => {
    const { userName, date, shift, purpose, route, status, reason } = data;
    try {
        await createOtRepo({ userName, date, shift, purpose, route, status, reason });
        return Promise.resolve("Successfully saved Ot.");
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const getOtIdService = async (id) => {
    try {
        const Ot = await getOtByIdRepo(id);
        return Promise.resolve(Ot);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const getOtService = async () => {
    try {
        const Ot = await getOtRepo();
        return Promise.resolve(Ot);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const updateOtService = async (id, data) => {
    try {
        const Ot = await updateOtRepo(id, data);
        return Promise.resolve(Ot);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};