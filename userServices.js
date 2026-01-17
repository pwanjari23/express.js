const fs = require("fs");
const path = require("path");

const readingDataByFile = () => {
  const filePath = path.join(__dirname, "../data/user.json");
  const data = fs.readFileSync(filePath, "utf-8");
  let users = JSON.parse(data);

  return users;
};

const sortingValuesUsingParams = (req, users) => {
  if (req.query.age) {
    const age = parseInt(req.query.age);
    users = users.filter((user) => user.age === age);
  }

  if (req.query.sortBy === "name") {
    users.sort((a, b) => a.name.localeCompare(b.name));
  }

  return users;
};

module.exports = {
  readingDataByFile,
  sortingValuesUsingParams,
};
