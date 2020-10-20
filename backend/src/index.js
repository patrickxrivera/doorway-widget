require('dotenv').config()

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Sentry = require("./services/sentry");
const { setupRoutes } = require("./routes");

const port = process.env.PORT || 5000;

const server = express();

server.use(Sentry.Handlers.requestHandler());
server.use(cors());
server.use(bodyParser.json());

setupRoutes(server);

server.use(Sentry.Handlers.errorHandler());

server.use(onError = (err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

server.set("port", port);

server.listen(port, function() {
  console.log(`Server listening on port ${port}`);
});

module.exports = server;
