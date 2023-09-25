import {
    createbusRepo,
    getbusByIdRepo,
    getbusRepo,
    updatebusRepo
} from "../repository/bus_repo.js";

export const savebusService = async (data) => {
    const { busid, owner, routeName, busRegisterNumber, seatCapacity } = data;
    try {
        await createbusRepo({ busid, owner, routeName, busRegisterNumber, seatCapacity });
        return Promise.resolve("Successfully saved bus.");
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const getbusIdService = async (id) => {
    try {
        const bus = await getbusByIdRepo(id);
        return Promise.resolve(bus);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const getbusService = async () => {
    try {
        const bus = await getbusRepo();
        return Promise.resolve(bus);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const updatebusService = async (id, data) => {
    try {
        const bus = await updatebusRepo(id, data);
        return Promise.resolve(bus);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};