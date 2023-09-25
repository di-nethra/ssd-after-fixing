import { Credit } from "../models/credits_model.js";

export const createCreditRepo = (data) =>
Credit.create(data)
        .then((Credit) => {
            return Promise.resolve(Credit);
        })
        .catch(() => {
            throw new Error("Internal server error.", 500);
        });

export const getCreditByIdRepo = (id) =>
Credit.findById(id)
        .then((Credit) => {
            if (!Credit) {
                throw new Error("Credit not found.", 404);
            }
            return Promise.resolve(Credit);
        })
        .catch(() => {
            throw new Error("Internal server error.", 500);
        });

export const getCreditRepo = () =>
Credit.find()
        .then((Credit) => {
            return Promise.resolve(Credit);
        })
        .catch(() => {
            throw new Error("Internal server error.", 500);
        });

export const updateCreditRepo = (id, data) =>
Credit.findByIdAndUpdate(id, data, { new: true })
        .then((Credit) => {
            if (!Credit) {
                throw new Error("Credit not found.", 404);
            }
            return Promise.resolve(Credit);
        })
        .catch(() => {
            throw new Error("Internal server error.", 500);
        });