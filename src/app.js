import express from "express";
import dotenv from "dotenv";
import { port } from "./utils/constants.js";
import db from "./config/db.js";
import router from "./routes/auth.routes.js";

db();

dotenv.config();
const app = express();

// middleware
app.use(express.json());
app.use('/api/auth',router);


// routes


app.get("/", (req, res) => {
  console.log("hey");
});

app.listen(port, () => {
  console.log(`serever running at : ${port}`);
});
