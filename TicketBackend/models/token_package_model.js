import mongoose from "mongoose";

const { Schema } = mongoose;

const tokenPackage = new Schema(
    {
        packageId:Integer,
        packageName:String,
        amount:Float
    }

);

export const TokenPackage = mongoose.model("tokenPackageUsers",tokenPackage );