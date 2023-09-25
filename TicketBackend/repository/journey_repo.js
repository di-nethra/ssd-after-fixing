import { Journey } from "../models/journey_model.js";

export const createJourneyRepo = (data) =>
Journey.create(data)
        .then((Journey) => {
            return Promise.resolve(Journey);
        })
        .catch(() => {
            throw new Error("Internal server error.", 500);
        });

export const getJourneyByIdRepo = (id) =>
Journey.findById(id)
        .then((Journey) => {
            if (!Journey) {
                throw new Error("Journey not found.", 404);
            }
            return Promise.resolve(Journey);
        })
        .catch(() => {
            throw new Error("Internal server error.", 500);
        });

export const getJourneyRepo = () =>
Journey.find()
        .then((Journey) => {
            return Promise.resolve(Journey);
        })
        .catch(() => {
            throw new Error("Internal server error.", 500);
        });

export const updateJourneyRepo = (id, data) =>
Journey.findByIdAndUpdate(id, data, { new: true })
        .then((Journey) => {
            if (!Journey) {
                throw new Error("Journey not found.", 404);
            }
            return Promise.resolve(Journey);
        })
        .catch(() => {
            throw new Error("Internal server error.", 500);
        });