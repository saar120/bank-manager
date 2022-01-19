const express = require("express");
const userRouter = express.Router();
const { getAllUsers, addUser } = require("../controllers/controllers");

userRouter.get("/getUsers", getAllUsers);

userRouter.get("/:id", (req, res) => {
  res.send("user");
});

userRouter.post("/", addUser);

userRouter.delete("/:id", (req, res) => {
  res.send("removed user");
});

module.exports = userRouter;
