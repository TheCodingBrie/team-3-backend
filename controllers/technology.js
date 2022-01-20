import Technology from "../models/Technology.js";

const getAllTechnologies = (req, res) => {
  Technology.find({})
    .then((result) => {
      res.json(result);
      console.log("getAllPhotos");
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: true });
    });
};

const addTechnology = async (req, res) => {
  try {
    await Technology.create({
      name: req.body.name,
      logo_url: req.body.logo_url,
      road: req.body.road,
      type: req.body.type,
      description: req.body.description,
      difficulty: req.body.difficulty,
    });
    console.log("Used AddTechnology");
    res.send("Your Technology was added");
  } catch (err) {
    console.log(err);
    res.end();
  }
};

const getTechnologiesByRoad = async (req, res) => {
  try {
    const technologiesByRoad = await Technology.find(req.params);
    res.json(technologiesByRoad);
    console.log("getTechnologiesByRoad");
  } catch (err) {
    console.log(err);
    res.end();
  }
};

const getTechnologyByName = async (req, res) => {
  try {
    const technologyByName = await Technology.find(req.params);
    res.json(technologyByName);
    console.log("getTechnologyByName");
  } catch (err) {
    console.log(err);
    res.end();
  }
};

export {
  getAllTechnologies,
  addTechnology,
  getTechnologiesByRoad,
  getTechnologyByName,
};
