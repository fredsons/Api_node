const mongoose = require("mongoose");

async function main() {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(
      "mongodb+srv://Fred:YUoFGxMRmlZ5Ubqx@cluster0.jmh46yu.mongodb.net/test"
    );
    console.log("conectou");
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

module.exports = main;
