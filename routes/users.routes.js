const express = require("express");
const userRouter = express.Router();
const { getAllUsers, addUser, getUser } = require("../controllers/controllers");

userRouter.get("/", getAllUsers);

userRouter.get("/:id", getUser);

userRouter.post("/", addUser);

userRouter.delete("/:id", (req, res) => {
  res.send("removed user");
});

module.exports = userRouter;
