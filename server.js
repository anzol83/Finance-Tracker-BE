import "dotenv/config";
import express from "express";
import userRouter from "./router/userRouter.js";
import { connectToMongoDB } from "./config/dbConfig.js";
import cors from "cors";

const app = express();

const PORT = process.env.PORT || 3000;

cors;

// Connect to Database
connectToMongoDB();

app.use(express.json());

app.use(cors());

app.use("/api/users", userRouter);

app.listen(PORT, (error) => {
  error
    ? console.log(error.message)
    : console.log(`Server Running Successfully`);
});
