import {
    createCreditRepo,
    getCreditByIdRepo,
    getCreditRepo,
    updateCreditRepo
} from "../repository/credits_repo.js";

export const saveCreditService = async (data) => {
    const { userName, amount, lastAdded, creditCard, cvc, expDate, date } = data;
    try {
        await createCreditRepo({ userName, amount, lastAdded, creditCard, cvc, expDate, date });
        return Promise.resolve("Successfully saved Credit.");
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const getCreditIdService = async (id) => {
    try {
        const Credit = await getCreditByIdRepo(id);
        return Promise.resolve(Credit);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const getCreditService = async () => {
    try {
        const Credit = await getCreditRepo();
        return Promise.resolve(Credit);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const updateCreditService = async (id, data) => {
    try {
        const Credit = await updateCreditRepo(id, data);
        return Promise.resolve(Credit);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};