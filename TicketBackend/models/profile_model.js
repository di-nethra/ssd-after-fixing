import mongoose from "mongoose";

const { Schema } = mongoose;

const user = new Schema(
    {
        userName:String,
        password:String,
        email:String,
        address:String,
        nic:String,
        cardType:String,
        role:String
    }

);

export const User = mongoose.model("users",user );