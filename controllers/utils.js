const ObjectId = require("mongoose").Types.ObjectId;

const validateObjectId = (id) => {
  if (!ObjectId.isValid(id)) {
    const error = new Error("Invalid ID");
    error.code = 404;
    throw error;
  }
};

module.exports = { validateObjectId };
