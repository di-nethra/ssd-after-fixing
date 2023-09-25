import mongoose from "mongoose";

const { Schema } = mongoose;

const driver = new Schema(
    {
        employeeId:Number,
        employeeName:String,
        email:String,
        nicNo:String,
        drivingLicenId:String
    }

);

export const Driver = mongoose.model("driverUsers",driver );