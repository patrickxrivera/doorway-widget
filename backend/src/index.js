require('dotenv').config()

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { setupRoutes } = require("./routes");

const port = process.env.PORT || 5000;

const server = express();

server.use(cors());
server.use(bodyParser.json());

setupRoutes(server);

server.set("port", port);

server.listen(port, function() {
  console.log(`Server listening on port ${port}`);
});

module.exports = server;
