import { Token } from "../models/token_model.js";

export const createTokenRepo = (data) =>
    Token.create(data)
        .then((Token) => {
            return Promise.resolve(Token);
        })
        .catch(() => {
            throw new Error("Internal server error.", 500);
        });

export const getTokenByIdRepo = (id) =>
    Token.findById(id)
        .then((Token) => {
            if (!Token) {
                throw new Error("Token not found.", 404);
            }
            return Promise.resolve(Token);
        })
        .catch(() => {
            throw new Error("Internal server error.", 500);
        });

export const getTokenRepo = () =>
    Token.find()
        .then((Token) => {
            return Promise.resolve(Token);
        })
        .catch(() => {
            throw new Error("Internal server error.", 500);
        });

export const updateTokenRepo = (id, data) =>
    Token.findByIdAndUpdate(id, data, { new: true })
        .then((Token) => {
            if (!Token) {
                throw new Error("Token not found.", 404);
            }
            return Promise.resolve(Token);
        })
        .catch(() => {
            throw new Error("Internal server error.", 500);
        });