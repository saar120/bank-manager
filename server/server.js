const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("../routes/users.routes");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const connectionURI = process.env.MONGODB_CONNECTION_URI;

mongoose
  .connect(connectionURI)
  .then(() => console.log("Database connected"))
  .catch((err) => console.error(err));

app.use("/users", userRouter);

app.listen(port, () => {
  console.log("Server is listening on port " + port);
});
