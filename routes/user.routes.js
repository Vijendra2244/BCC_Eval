const express = require("express");
const {
  registerUser,
  loginUser,
} = require("../controllers/user.controllers");
const userRouter = express.Router();

userRouter.route("/auth/register").post(registerUser);
userRouter.route("/auth/login").post(loginUser);
module.exports = { userRouter };
