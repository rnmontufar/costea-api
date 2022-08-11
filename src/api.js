const express = require("express");
const serverless = require("serverless-http");
const sc = require("./script");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    hello: "hi!",
  });
});

router.get("/test", (req, res) => {
  res.json({
    hello: "test!",
  });
});

router.post("/testpost", (req, res) => {
  res.json({
    hello: "hit the POST!",
  });
});

router.get("/cortes", (req, res) => {
  sc.start();
  res.json({
    hello: "cortes!",
  });
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
