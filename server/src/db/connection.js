require("dotenv").config();

const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connection success......");
  })
  .catch((e) => {
    console.error("Connection error:", e.message);
  });
