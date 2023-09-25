import { Driver } from "../models/driver_model.js";

export const createDriverRepo = (data) =>
Driver.create(data)
        .then((Driver) => {
            return Promise.resolve(Driver);
        })
        .catch(() => {
            throw new Error("Internal server error.", 500);
        });

export const getDriverByIdRepo = (id) =>
Driver.findById(id)
        .then((Driver) => {
            if (!Driver) {
                throw new Error("Driver not found.", 404);
            }
            return Promise.resolve(Driver);
        })
        .catch(() => {
            throw new Error("Internal server error.", 500);
        });

export const getDriverRepo = () =>
Driver.find()
        .then((Driver) => {
            return Promise.resolve(Driver);
        })
        .catch(() => {
            throw new Error("Internal server error.", 500);
        });

export const updateDriverRepo = (id, data) =>
Driver.findByIdAndUpdate(id, data, { new: true })
        .then((Driver) => {
            if (!Driver) {
                throw new Error("Driver not found.", 404);
            }
            return Promise.resolve(Driver);
        })
        .catch(() => {
            throw new Error("Internal server error.", 500);
        });