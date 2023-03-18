const mongoose = require("mongoose");

const connectDb = () => {
  try {
    // Connect to MongoDB database
      mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("database connected!!")
  } catch (error) {
    console.log(error)
  }
};

module.exports = connectDb;
