const mongoose = require("mongoose"); // Import library to use its methods and custom functionalities to manipulate MongoDB docs

const JokesSchema = new mongoose.Schema( // Creating our schema (blueprint)
  {
    setup: String,
    punchline: String,
  },
  { timestamp: true } // This will add to our data 'createdAt' and 'updatedAt' key-value pairs everytime we create/change something
);

const JokesModel = mongoose.model("Jokes", JokesSchema); // We define our model as a variable

module.exports = JokesModel; // We export our model
