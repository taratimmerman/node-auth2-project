const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.get("/", (req, res) => {
    res.json({ message: "Welcome to Tara's Unit 4 - Sprint 3 - Module Project 2" });
  });
  
  module.exports = server;