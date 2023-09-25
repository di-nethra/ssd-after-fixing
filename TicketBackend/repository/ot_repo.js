import { Ot } from "../models/ot_model.js";

export const createOtRepo = (data) =>
Ot.create(data)
        .then((Ot) => {
            return Promise.resolve(Ot);
        })
        .catch(() => {
            throw new Error("Internal server error.", 500);
        });

export const getOtByIdRepo = (id) =>
Ot.findById(id)
        .then((Ot) => {
            if (!Ot) {
                throw new Error("Ot not found.", 404);
            }
            return Promise.resolve(Ot);
        })
        .catch(() => {
            throw new Error("Internal server error.", 500);
        });

export const getOtRepo = () =>
Ot.find()
        .then((Ot) => {
            return Promise.resolve(Ot);
        })
        .catch(() => {
            throw new Error("Internal server error.", 500);
        });

export const updateOtRepo = (id, data) =>
Ot.findByIdAndUpdate(id, data, { new: true })
        .then((Ot) => {
            if (!Ot) {
                throw new Error("Ot not found.", 404);
            }
            return Promise.resolve(Ot);
        })
        .catch(() => {
            throw new Error("Internal server error.", 500);
        });