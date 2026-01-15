const express = require("express");
const app = express();
let port = 3200;

app.use((req, res, next) => {
  console.log("Authentication middleware called");
  next();
});

const userMiddleware = (req, res, next) => {
  req.user = "Guest";
  console.log("User middleware called");
  next();
};

app.get("/welcome", userMiddleware, (req, res) => {
  res.send(`<h1>Welcome, ${req.user}!</h1>`);
});

app.listen(port, () => {
  console.log("Server is running on port");
});
