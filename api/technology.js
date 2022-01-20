import express from "express";
import {
  getAllTechnologies,
  addTechnology,
  getTechnologiesByRoad,
  getTechnologyByName,
} from "../controllers/technology.js";

const api = express.Router();

api.route("/all").get(getAllTechnologies).post(addTechnology);
api.route("/:road/road").get(getTechnologiesByRoad);
api.route("/:technology/technology").get(getTechnologyByName);

export default api;
