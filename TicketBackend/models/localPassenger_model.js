import mongoose from "mongoose";

const { Schema } = mongoose;

const localPassenger = new Schema(
    {
        name:String,
        email:String,
        userId:Integer,
        nicNo:String,
        creditBalance:Float
    }

);

export const LocalPassenger = mongoose.model("LocalPassengerUsers",localPassenger );