import mongoose from "mongoose";
const { Schema } = mongoose;

const Technology = new Schema({
  name: String, //The name of the technology : React, HTML, CSS, etc.
  logo_url: String, //to show the logo from the technology
  road: String, // Tools, Frontend, Backend
  type: String, //tool, language, framework, etc.
  description: String, //Description of the technology and it's use, relevance, etc.
  difficulty: String, //How hard it is to learn
  created_at: { type: Date, default: Date.now },
});

export default mongoose.model("Technology", Technology);
