import { Bus } from "../models/bus_model.js";

export const createbusRepo = (data) =>
Bus.create(data)
        .then((Bus) => {
            return Promise.resolve(Bus);
        })
        .catch(() => {
            throw new Error("Internal server error.", 500);
        });

export const getbusByIdRepo = (id) =>
Bus.findById(id)
        .then((Bus) => {
            if (!Bus) {
                throw new Error("bus not found.", 404);
            }
            return Promise.resolve(Bus);
        })
        .catch(() => {
            throw new Error("Internal server error.", 500);
        });

export const getbusRepo = () =>
Bus.find()
        .then((Bus) => {
            return Promise.resolve(Bus);
        })
        .catch(() => {
            throw new Error("Internal server error.", 500);
        });

export const updatebusRepo = (id, data) =>
Bus.findByIdAndUpdate(id, data, { new: true })
        .then((Bus) => {
            if (!Bus) {
                throw new Error("bus not found.", 404);
            }
            return Promise.resolve(Bus);
        })
        .catch(() => {
            throw new Error("Internal server error.", 500);
        });