import { Passenger } from "../models/passenger_model.js";

export const createPassengerRepo = (data) =>
    Passenger.create(data)
        .then((Passenger) => {
            return Promise.resolve(Passenger);
        })
        .catch(() => {
            throw new Error("Internal server error.", 500);
        });

export const getPassengerByIdRepo = (id) =>
    Passenger.findById(id)
        .then((Passenger) => {
            if (!Passenger) {
                throw new Error("Passenger not found.", 404);
            }
            return Promise.resolve(Passenger);
        })
        .catch(() => {
            throw new Error("Internal server error.", 500);
        });

export const getPassengerRepo = () =>
    Passenger.find()
        .then((Passenger) => {
            return Promise.resolve(Passenger);
        })
        .catch(() => {
            throw new Error("Internal server error.", 500);
        });

export const updatePassengerRepo = (id, data) =>
    Passenger.findByIdAndUpdate(id, data, { new: true })
        .then((Passenger) => {
            if (!Passenger) {
                throw new Error("Passenger not found.", 404);
            }
            return Promise.resolve(Passenger);
        })
        .catch(() => {
            throw new Error("Internal server error.", 500);
        });