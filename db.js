//connect to mongo db
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

async function connection() {
  console.debug("**********");
  console.log(process.env);
  const connection = await mongoose.connect(process.env.CONNECTION_SRTRING);
  console.log("connected to db");
}

module.exports = connection;
