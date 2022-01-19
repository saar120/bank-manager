const express = require("express");
const userRouter = express.Router();

userRouter.get("/getUsers", (req, res) => {
  res.send("all users");
});

userRouter.get("/:id", (req, res) => {
  res.send("user");
});

userRouter.post("/", (req, res) => {
  res.send("added user");
});

userRouter.delete("/:id", (req, res) => {
  res.send("removed user");
});

module.exports = userRouter;
