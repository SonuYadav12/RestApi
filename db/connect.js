const mongoose = require("mongoose");



// Define a function to connect to the MongoDB database
const connectDB = (uri) => {
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    // Exit process with failure
    process.exit(1);
  });
};

module.exports = connectDB;
