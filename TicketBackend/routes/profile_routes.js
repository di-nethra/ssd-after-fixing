import express from "express";
import {
    saveUser,
    getUserId,
    getUser,
    updateUser,
    deletUserId
} from "../controllers/profile_controller.js";

const profileRouter = express.Router();

profileRouter.post("/profile", saveUser);
profileRouter.get("/profile/:id", getUserId);
profileRouter.get("/profile", getUser);
profileRouter.put("/profile/:id", updateUser);
profileRouter.delete("/profile/:id", deletUserId);

export default profileRouter;