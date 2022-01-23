const User = require("../models/user.model");
const { validateObjectId, validateNumber } = require("./utils");

const addUser = async (req, res) => {
  try {
    const { cash, credit } = req.body;
    // function that validate the fields in the user
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
    const { id } = req.params;
    validateObjectId(id);
    const user = await User.findById(id);
    if (!user) {
      throw new Error(`User does not exist`);
    }
    res.status(200).send({ user: user });
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    validateObjectId(id);
    const { deletedCount } = await User.deleteOne({ _id: id });
    if (!deletedCount) throw new Error(`User ${id} does not exist`);
    res.status(200).send({ message: `User ${id} deleted` });
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

const deposit = async (req, res) => {
  try {
    const { id } = req.params;
    const { amount } = req.body;
    validateObjectId(id);
    validateNumber(amount);
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }
    user.cash += amount;
    await user.save();
    res.status(200).send({ message: `Added ${amount} to ${user._id}` });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const withdraw = async (req, res) => {
  try {
    const id = req.params.id;
    // change it to {id}
    const amount = req.body.amount;
    validateObjectId(id);
    validateNumber(amount);
    // validateIsNumber
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }
    userTotal = user.cash + user.credit;
    if (amount > userTotal) {
      throw new Error("Not enough money to withdraw");
    }
    // User.findByIdAndUpdate(id, {$set;:{data}}, {runValidators:true})
    user.cash -= amount;
    await user.save();
    res.status(200).send({ message: `withdraw ${amount}` });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const updateCredit = async (req, res) => {
  try {
    const id = req.params.id;
    const creditAmount = req.body.amount;
    // { }
    validateObjectId(id);
    validateNumber(creditAmount);
    const user = await User.findById(id);
    user.credit = creditAmount;
    const {
      updatedUser: { credit },
    } = await user.save();
    res.status(200).send({ message: `User Credit is now ${credit}` });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = { getAllUsers, getUser, addUser, deposit, deleteUser, withdraw, updateCredit };
// utils small and pure functions something like: const removeEmptystrings = (str) => //code that removes the empty strings
// services can be a medium size functions they should serve the needs for the query to the db
