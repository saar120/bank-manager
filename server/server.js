const express = require("express");
const cors = require("cors");
const userRoutes = require("../routes/users.routes");

const app = express();

const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.use("/users", userRoutes);

app.listen(port, () => {
  console.log("Server is listening on port " + port);
});
