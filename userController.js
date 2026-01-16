const getUser = (req, res) => {
  res.send("Fetching all users.");
};

const getUsersById = (req, res) => {
  const { id } = req.params;
  res.send(`Fetching user with ID: ${id}`);
};

const createUser = (req, res) => {
  res.send("New user added");
};

const updateUserById = (req, res) => {
    res.send("Update the user by its id");
};

const deleteUserById = (req, res) => {
    res.send("Delete the user by its id");
};


module.exports = {
  getUser,
  getUsersById,
  createUser,
  updateUserById,
  deleteUserById,
};
