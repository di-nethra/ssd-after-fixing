import mongoose from "mongoose";

const { Schema } = mongoose;

const creditCard = new Schema(
    {
        userId:String,
        creditCard:String,
        cvc:String,
        expDate:String
    }

);

export const CreditCard = mongoose.model("creditCard",creditCard );