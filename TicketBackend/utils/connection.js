import mongoose from "mongoose";

export class Connection{
  constructor(){}
  connect = () => {
    mongoose.connect("mongodb+srv://anjanadinethra:8682123abc@cluster0.zxqokt6.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    mongoose.connection.once("open", () => {
      console.log("connected to MongoDb");
    });
  };
  
  disconnect = (done) => {
    mongoose.disconnect(done);
  };
}



