const express = require("express");
const app = express();
const PORT = 3000;

const studentRouter = require("./students");
const courseRouter = require("./courses");
app.use(express.json());

//integrating router
app.use("/students", studentRouter);
app.use("/courses", courseRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the Student & Course Portal API!");
});

app.get("/invalid", (req, res) => {
  res.send("Page not found");
});

app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
