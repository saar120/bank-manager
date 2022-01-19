const User = require("../models/user.model");
const { validateObjectId } = require("./utils");

const addUser = async (req, res) => {
  try {
    const { cash, credit } = req.body;
    const user = new User({ cash: cash || 0, credit: credit || 0 });
    await user.save();
    res.status(200).send({ message: "Added Successfully" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.status(200).send({ users: allUsers });
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const id = req.params.id;
    validateObjectId(id);
    const user = await User.findById(id);
    if (!user) {
      throw new Error(`User ${id} does not exist`);
    }
    res.status(200).send({ user: user });
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

module.exports = { getAllUsers, getUser, addUser };
