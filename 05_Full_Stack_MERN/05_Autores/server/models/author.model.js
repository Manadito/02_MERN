const mongoose = require("mongoose"); // Import library to use its methods and custom functionalities to manipulate MongoDB docs

const AuthorSchema = new mongoose.Schema( // Creating our schema (blueprint)
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      minLength: [3, "First name must at least be 3 characters long"],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      minLength: [3, "Last name must at least be 3 characters long"],
    },
  },
  { timestamp: true } // This will add to our data 'createdAt' and 'updatedAt' key-value pairs everytime we create/change something
);

const AuthorModel = mongoose.model("Author", AuthorSchema); // We define our model as a variable

module.exports = AuthorModel; // We export our model

// A Schema is the configuration object for a Mongoose model. It is how we setup our model. A SchemaType is the configuration object for an
// individual property within our model.
