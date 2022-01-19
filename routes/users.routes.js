const express = require("express");
const rootRouter = express.Router();

rootRouter.get("/getUsers", (req, res) => {
  res.send("all users");
});

rootRouter.get("/:id", (req, res) => {
  res.send("user");
});

rootRouter.post("/", (req, res) => {
  res.send("added user");
});

rootRouter.delete("/:id", (req, res) => {
  res.send("removed user");
});

module.exports = rootRouter;
