const fs = require("fs");
const path = require("path");
const userServices = require("../services/userServices");
const { sendSuccess, sendError } = require("../utils/response");

const getUser = (req, res, next) => {
  try {
    let users = userServices.readingDataByFile();
    users = userServices.sortingValuesUsingParams(req, users);

    if (!users || users.length === 0) {
      throw sendError("User not found", 404); // 👈 using utils
    }

    sendSuccess(res, users); // 👈 using utils
  } catch (err) {
    next(err); // 👈 centralized middleware will handle this
  }
};
// const getUsersById = (req, res) => {
//   const { id } = req.params;
//   res.send(`Fetching user with ID: ${id}`);
// };


const createUser = (req, res, next) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      throw sendError("Name and email are required", 400); // 👈 using utils
    }

    const user = {
      id: Date.now(),
      name,
      email,
    };

    sendSuccess(res, user, 201); // 👈 using utils
  } catch (err) {
    next(err); // 👈 centralized middleware
  }
};


// const updateUserById = (req, res) => {
//   res.send("Update the user by its id");
// };

// const deleteUserById = (req, res) => {
//   res.send("Delete the user by its id");
// };

module.exports = {
  getUser,
  //   getUsersById,
    createUser,
  //   updateUserById,
  //   deleteUserById,
};
