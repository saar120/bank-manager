require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const userRouter = require("./src/routes/users.routes");
const { PORT } = require("./src/config/env.config");

const app = express();

const publicPath = path.join(__dirname, "client/build");

app.use(cors());
app.use(express.json());
app.use(express.static(publicPath));

const connectionURI = process.env.MONGODB_CONNECTION_URI;

mongoose
  .connect(connectionURI)
  .then(() => console.log("Database connected"))
  .catch((err) => console.error(err));

app.use("/api/users", userRouter);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});
