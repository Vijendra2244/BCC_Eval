const express = require("express");
const { connectionToDb } = require("./config/db");
const { userRouter } = require("./routes/user.routes");
const app = express();
const cookieParser = require("cookie-parser");
const PORT = 4000;
app.use(express.json());
app.use(cookieParser());
app.get("/", (req, res) => {
  res.send("Home page for Library system");
});

app.use("/api", userRouter);

app.listen(PORT, async () => {
  try {
    await connectionToDb.then((req) => console.log("connected to db"));
    console.log("app is running");
  } catch (error) {
    console.log(error, "error");
  }
});
