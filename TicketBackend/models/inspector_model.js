import mongoose from "mongoose";

const { Schema } = mongoose;

const inspector = new Schema(
    {
        employeeId:Integer,
        employeeName:String,
        email:String,
        nicNo:String,
        inspectorLicenId:String
    }

);

export const Inspector = mongoose.model("inspectorUsers",inspector );