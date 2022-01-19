const express = require("express");
const userRouter = express.Router();
const { getAllUsers, addUser, getUser, deposit, deleteUser, withdraw } = require("../controllers/controllers");

userRouter.get("/", getAllUsers);

userRouter.get("/:id", getUser);

userRouter.post("/", addUser);

userRouter.put("/deposit/:id", deposit);

userRouter.put("/withdraw/:id", withdraw);

userRouter.delete("/:id", deleteUser);

module.exports = userRouter;
