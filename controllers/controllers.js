const User = require("../models/user.model");

const addUser = async (req, res) => {
  try {
    const { cash, credit } = req.body;
    const user = new User({ cash: cash || 0, credit: credit || 0 });
    await user.save();
    res.status(200).send({ message: "Added Successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message, error });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.status(200).send({ users: allUsers });
  } catch (error) {
    res.status(404).send({ message: error.message, error });
  }
};

module.exports = { getAllUsers, addUser };
