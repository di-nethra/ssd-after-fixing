import mongoose from "mongoose";

const { Schema } = mongoose;

const bus = new Schema(
    {
        busid:String,
        owner:String,
        routeName:String,
        busRegisterNumber:String,
        seatCapacity:String
    }

);

export const Bus = mongoose.model("busUsers",bus );