import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const DB_CONNECTION_URI = process.env.CONNECTION_URI

export const connectToMongoDb = () => {
  try {
    const connect = mongoose.connect(DB_CONNECTION_URI)
    if(connect) {
      console.log("Database connected");
    }
  } catch (error) {
    console.log("Error:", error);
  }
}