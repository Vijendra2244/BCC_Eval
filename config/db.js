const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
console.log(process.env.MONGODB_URL);
const connectionToDb = mongoose.connect(process.env.MONGODB_URI);

module.exports = { connectionToDb };
