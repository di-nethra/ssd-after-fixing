import mongoose from "mongoose";

const { Schema } = mongoose;

const journey = new Schema(
    {
        jouneyCode:Number,
        startUpLocation:String,
        destination:String,
        departureTime:String,
        journeyEndTime:String,
        date:String,
        link:String,
        seats:Number
    }

);

export const Journey = mongoose.model("journeyUsers",journey );