import {
    createUserRepo,
    getUserByIdRepo,
    getUserRepo,
    updateUserRepo,
    deleteUserByIdRepo
} from "../repository/profile_repo.js";

export const saveUserService = async (data) => {
    const { userName, password, email, address, nic, cardType, role } = data;
    try {
        await createUserRepo({ userName, password, email, address, nic, cardType, role });
        return Promise.resolve("Successfully saved User.");
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const getUserIdService = async (id) => {
    try {
        const User = await getUserByIdRepo(id);
        return Promise.resolve(User);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const getUserService = async () => {
    try {
        const User = await getUserRepo();
        return Promise.resolve(User);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const updateUserService = async (id, data) => {
    try {
        const User = await updateUserRepo(id, data);
        return Promise.resolve(User);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const deleteUserIdService = async (id) => {
    try {
        const User = await deleteUserByIdRepo(id);
        return Promise.resolve(User);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};