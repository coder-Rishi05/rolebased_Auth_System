import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbUrl = process.env.mongo_URL;

const db = async () => {
  try {
    const connect = await mongoose.connect(`${dbUrl}roleAuth`);
    console.log(
      "database connected sucessfully",
      connect.connection.host,
      connect.connection.name,
    );
  } catch (err) {
    console.log("error connecting database", err);
    process.exit(1);
  }
};

export default db;
