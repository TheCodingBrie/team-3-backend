import dotenv from "dotenv";
import express from "express";
import colors from "colors";
import cors from "cors";
import mongoose from "mongoose";
import technology from "./api/technology.js";

dotenv.config();
const PORT = process.env.PORT || 3001;
const server = express();

server.use(cors());
server.use(express.urlencoded({ extended: false }));
server.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    server.listen(PORT, () =>
      console.log(`Server started on port ${PORT}`.rainbow)
    );
    console.log("Database connected");
  })
  .catch((err) => console.log("error", err));

server.get("/", (req, res) =>
  res.send("Welcome to the Hackaton Team 3 Server!")
);
server.use("/api", technology);
