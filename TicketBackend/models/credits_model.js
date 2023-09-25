import mongoose from "mongoose";

const { Schema } = mongoose;

const credit = new Schema(
    {
        userName:String,
        amount:Number,
        lastAdded:Number,
        creditCard:String,
        cvc:String,
        expDate:String,
        date:String
    }

);

export const Credit = mongoose.model("credit",credit );