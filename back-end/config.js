// config.js
const mongoose = require("mongoose");

const MONGODB_URI =
  "mongodb+srv://kunalgosavi106:0UocL2EkyudR361r@cluster0.qovxb5d.mongodb.net/?retryWrites=true&w=majority"; // Update with your MongoDB URI

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

module.exports = mongoose;
