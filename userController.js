const fs = require("fs");
const path = require("path");
const userServices = require("../services/userServices");
const { sendErrorResponse, sendResponse } = require("../utils/response");

const getUser = (req, res) => {
  try {
    let users = userServices.readingDataByFile();
    users = userServices.sortingValuesUsingParams(req, users);

    const userId = parseInt(req.query.userId); // example: get user by query
    const user = users.find((u) => u.id === userId);

    if (!user) {
      const err = new Error("User not found");
      err.statusCode = 404;
      return sendErrorResponse(res, err); // centralized error
    }

    return sendResponse(res, user);
  } catch (err) {
    return sendErrorResponse(res, err);
  }
};

const getUserById = (req, res) => {
  try {
    const users = userServices.readingDataByFile();
    const userId = parseInt(req.params.id);

    const user = users.find((u) => u.id === userId);

    if (!user) {
      const err = new Error("User not found");
      err.statusCode = 404;
      return sendErrorResponse(res, err);
    }

    return sendResponse(res, user);
  } catch (err) {
    return sendErrorResponse(res, err);
  }
};

const createUser = (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      const err = new Error("Name and Email are required");
      err.statusCode = 400;
      return sendErrorResponse(res, err);
    }

    const users = userServices.readingDataByFile();
    const newUser = { id: users.length + 1, name, email };
    users.push(newUser);

    // Optionally, save back to file
    // userServices.writeDataToFile(users);

    return sendResponse(res, newUser, 201);
  } catch (err) {
    return sendErrorResponse(res, err);
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
  getUserById,
  createUser,
  //   updateUserById,
  //   deleteUserById,
};
