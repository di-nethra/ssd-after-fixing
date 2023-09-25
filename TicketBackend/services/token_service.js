import {
    createTokenRepo,
    getTokenByIdRepo,
    getTokenRepo,
    updateTokenRepo
} from "../repository/token_repo.js";

export const savetokenService = async (data) => {
    const { tokenId, tokenValidityTime, tokenCreditBalance } = data;
    try {
        await createTokenRepo({ tokenId, tokenValidityTime, tokenCreditBalance });
        return Promise.resolve("Successfully saved token.");
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const gettokenIdService = async (id) => {
    try {
        const token = await getTokenByIdRepo(id);
        return Promise.resolve(token);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const gettokenService = async () => {
    try {
        const token = await getTokenRepo();
        return Promise.resolve(token);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const updatetokenService = async (id, data) => {
    try {
        const token = await updateTokenRepo(id, data);
        return Promise.resolve(token);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};