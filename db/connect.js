const mongoose = require("mongoose");

// Define the MongoDB URI
const uri = "mongodb+srv://yadavsonukumar036:Vision.red.12.3@sonuapi.tx8pfsw.mongodb.net/yadavsonukumar036?retryWrites=true&w=majority&appName=SonuApi";

// Define a function to connect to the MongoDB database
const connectDB = () => {
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
