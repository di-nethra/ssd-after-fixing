import {
    createCreditCardRepo,
    getCreditCardByIdRepo,
    getCreditCardRepo,
    updateCreditCardRepo
} from "../repository/creditCard_repo.js";

export const saveCrediCardtService = async (data) => {
    const { userId, creditCard, cvc, expDate } = data;
    try {
        await createCreditCardRepo({ userId, creditCard, cvc, expDate });
        return Promise.resolve("Successfully saved CrediCardt.");
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const getCrediCardtIdService = async (id) => {
    try {
        const CrediCardt = await getCreditCardByIdRepo(id);
        return Promise.resolve(CrediCardt);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const getCrediCardtService = async () => {
    try {
        const CrediCardt = await getCreditCardRepo();
        return Promise.resolve(CrediCardt);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const updateCrediCardtService = async (id, data) => {
    try {
        const CrediCardt = await updateCreditCardRepo(id, data);
        return Promise.resolve(CrediCardt);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};