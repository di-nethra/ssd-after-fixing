import mongoose from "mongoose";

const { Schema } = mongoose;

const employee = new Schema(
    {
        employeeId:Integer,
        employeeName:String,
        email:String,
        nicNo:String
    }

);

export const Employee = mongoose.model("employeeUsers",employee );