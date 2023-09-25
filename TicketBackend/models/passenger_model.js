import mongoose from "mongoose";

const { Schema } = mongoose;

const passenger = new Schema(
    {
        name:String,
        email:String
    }

);

export const Passenger = mongoose.model("PassengerUsers",passenger );