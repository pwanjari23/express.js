const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// app.get("/home", (req, res) => {
//   res.send("Welcome! I am home page");
// });

// app.get("/about", (req, res) => {
//   res.send("Hey! I am about page");
// });

// app.get("/contact1", (req, res) => {
//   res.send("Hey, I am contact 1");
// });

// app.get("/contact2", (req, res) => {
//   res.send("Hey, I am contact 2");
// });

// app.get("/contact3", (req, res) => {
//   res.send("Hey, I am contact 3");
// });

// Dynamic Route
// app.get("/contact/:userid", (req, res) => {
//   const id = req.params.userid;
//   res.send(`Hello, from contact ${id}`);
// });

//dynamic route with query parameters
// app.get("/contact/:userid", (req, res) => {
//   const id = req.params.userid;
//   const name = req.query.name;
//   const age = req.query.age;
//   res.send(`Hello, from contact ${id}-${name},${age}`);
// });

app.get("/welcome/:username", (req, res) => {
  const name = req.params.username;
  const role = req.query.role;
  res.send(`Welcome ${name}, your role is ${role}`);
});

app.listen(PORT, () => {
  console.log(
    "Server is up and running on port 3000! Ready to handle requests."
  );
});
