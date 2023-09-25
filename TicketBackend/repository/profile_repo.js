import { User } from "../models/profile_model.js";

export const createUserRepo = (data) =>
  User.create(data)
    .then((User) => {
      return Promise.resolve(User);
    })
    .catch(() => {
      throw new Error("Internal server error.", 500);
    });

export const getUserByIdRepo = (id) =>
  User.findById(id)
    .then((User) => {
      if (!User) {
        throw new Error("User not found.", 404);
      }
      return Promise.resolve(User);
    })
    .catch(() => {
      throw new Error("Internal server error.", 500);
    });

export const getUserRepo = () =>
  User.find()
    .then((User) => {
      return Promise.resolve(User);
    })
    .catch(() => {
      throw new Error("Internal server error.", 500);
    });

export const updateUserRepo = (id, data) =>
  User.findByIdAndUpdate(id, data, { new: true })
    .then((User) => {
      if (!User) {
        throw new Error("User not found.", 404);
      }
      return Promise.resolve(User);
    })
    .catch(() => {
      throw new Error("Internal server error.", 500);
    });

export const deleteUserByIdRepo = (id) =>
  User.findByIdAndDelete(id)
    .then((User) => {
      if (!User) {
        throw new Error("User not found.", 404);
      }
      return Promise.resolve(User);
    })
    .catch(() => {
      throw new Error("Internal server error.", 500);
    });
