import express from "express";
import cors from "cors";
import bodyParser from "body-parser"
import "dotenv/config";
import { Connection } from "./utils/connection.js";

import passengerRoutes from "./routes/passenger_routes.js";
import tokenRoutes from "./routes/token_routes.js";
import busRoutes from "./routes/bus_routes.js";
import driverRoutes from "./routes/driver_routes.js";
import journeyRoutes from "./routes/journey_routes.js";
import profileRoutes from "./routes/profile_routes.js";
import otRoutes from "./routes/ot_routes.js";
import creditRoutes from "./routes/credit_routes.js";
import creditCardRoutes from "./routes/creditCard_routes.js";
import ticketRoutes from "./routes/tickets_routes.js";

const app = express();
app.use(cors());
app.use(bodyParser.json())
app.use(express.json());

const PORT = process.env.PORT || 4000;

//singleton pattern to create one object from the connection class and freeze it
const instance = new Connection()
Object.freeze(instance)
instance.connect();

app.use("/ts", passengerRoutes);
app.use("/ts", tokenRoutes)
app.use("/ts", busRoutes)
app.use("/ts", driverRoutes)
app.use("/ts", journeyRoutes)
app.use("/ts", profileRoutes)
app.use("/ts", otRoutes)
app.use("/ts", creditRoutes)
app.use("/ts", creditCardRoutes)
app.use("/ts", ticketRoutes)


app.get("/", (req, res) => {
  res.send("Hello World!");
});



app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });


  export default app;