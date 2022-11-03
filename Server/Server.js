const express = require("express");
const cors = require("cors");
const db = require("./Config/Database");
const authRoute = require("./Routes/User.Auth.Routes");
const quizRoute = require("./Routes/Quiz.Auth.Routes");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use("/api/users", authRoute);
app.use("/api", quizRoute)

const PORT = process.env.PORT || 8080;

app.listen(PORT, async () => {
  try {
    await db;
    console.log("connected to db successfully");
  } catch {
    console.log("something went wrong while connecting to db");
  }
  console.log(`listening on port http://localhost:${PORT}/`);
});
