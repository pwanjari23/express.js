const express = require("express");
const app = express();
const PORT = 3000;
const orderRouter = require("./routes/orders");
const userRouter = require("./routes/users");

//integrating router
app.use("/orders", orderRouter);
app.use("/users", userRouter);

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
