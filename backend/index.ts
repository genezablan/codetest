import bodyParser from "body-parser";
import cors from "cors";
import express, {Express} from "express";
import mongoose, { Schema } from "mongoose";
import UsersRoute from './api/users.router';

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/userProfileDB");
    console.log("MongoDB Connected...");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

const app:Express = express();
const PORT = process.env['PORT'] || 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/users', UsersRoute);
connectDB().then(() => {
  console.info('Connected to MongoDb')
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
})
