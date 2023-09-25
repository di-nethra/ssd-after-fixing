import { CreditCard } from "../models/creditCard_model.js";

export const createCreditCardRepo = (data) =>
CreditCard.create(data)
        .then((CreditCard) => {
            return Promise.resolve(CreditCard);
        })
        .catch(() => {
            throw new Error("Internal server error.", 500);
        });

export const getCreditCardByIdRepo = (id) =>
CreditCard.findById(id)
        .then((CreditCard) => {
            if (!CreditCard) {
                throw new Error("CreditCard not found.", 404);
            }
            return Promise.resolve(CreditCard);
        })
        .catch(() => {
            throw new Error("Internal server error.", 500);
        });

export const getCreditCardRepo = () =>
CreditCard.find()
        .then((CreditCard) => {
            return Promise.resolve(CreditCard);
        })
        .catch(() => {
            throw new Error("Internal server error.", 500);
        });

export const updateCreditCardRepo = (id, data) =>
CreditCard.findByIdAndUpdate(id, data, { new: true })
        .then((CreditCard) => {
            if (!CreditCard) {
                throw new Error("CreditCard not found.", 404);
            }
            return Promise.resolve(CreditCard);
        })
        .catch(() => {
            throw new Error("Internal server error.", 500);
        });