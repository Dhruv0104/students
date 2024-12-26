const mongoose = require("mongoose");

async function dbConnect() {
  await mongoose.connect(process.env.DB_URL);
  console.log("DB Connected");
}

module.exports = { dbConnect };
