import mongoose from "mongoose";

const { Schema } = mongoose;

const foriegnPassenger = new Schema(
    {
        name:String,
        email:String,
        passportNumber:String,
        creditCardNumber:String
    }

);

export const ForiegnPassenger = mongoose.model("foriegnPassengerUsers",foriegnPassenger );