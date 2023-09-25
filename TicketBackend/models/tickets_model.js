import mongoose from "mongoose";

const { Schema } = mongoose;

const ticket = new Schema(
    {
        userName:String,
        journeyId:String,
        seats:Number,
        bookedDate:String
    }

);

export const Tickets = mongoose.model("ticket",ticket );