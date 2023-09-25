import {
    createDriverRepo,
    getDriverByIdRepo,
    getDriverRepo,
    updateDriverRepo
} from "../repository/driver_repo.js";

export const saveDriverService = async (data) => {
    const { employeeId, employeeName, email, nicNo, drivingLicenId } = data;
    try {
        await createDriverRepo({ employeeId, employeeName, email, nicNo, drivingLicenId });
        return Promise.resolve("Successfully saved Driver.");
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const getDriverIdService = async (id) => {
    try {
        const Driver = await getDriverByIdRepo(id);
        return Promise.resolve(Driver);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const getDriverService = async () => {
    try {
        const Driver = await getDriverRepo();
        return Promise.resolve(Driver);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const updateDriverService = async (id, data) => {
    try {
        const Driver = await updateDriverRepo(id, data);
        return Promise.resolve(Driver);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};