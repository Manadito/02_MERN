const mongoose = require("mongoose"); // We import Mongoose to use ObjectId
const AuthorModel = require("../models/author.model"); // We import the model created in the .model.js file saved in the models folder
const { ObjectId } = mongoose.Types; // Destructuring assignment to get ObjectId

// We export the controller functions we will be using. Modules are components with one or more functions. These modules are exported to be used on
// some other part of the app (the user routes). This module provides the necessary methods to make API requests.

module.exports = {
  // Method to get all users
  getAllAuthors: (req, res) => {
    // This method consists of a key paired with an arrow function
    AuthorModel.find() //
      .then((allAuthors) => res.status(200).json(allAuthors)) // A promise is returned by the previous mongoose method. All users are returned in JSON
      .catch((err) =>
        res.status(500).json({ message: "Something went wrong", error: err })
      ); // if it fails it returns an error
  },

  // Method to get one user by Id
  getOneAuthorById: (req, res) => {
    // This method consists of a key paired with an arrow function
    AuthorModel.findById(req.params.id) // This property is an object containing the property id
      .then((oneAuthor) => res.status(200).json(oneAuthor)) // A promise is returned by the previous mongoose method. The user is returned in JSON
      .catch((err) =>
        res.status(404).json({ message: "Author not found", error: err })
      ); // if it fails it returns an error
  },

  // Method to create a user
  createNewAuthor: (req, res) => {
    // This method consists of a key paired with an arrow function
    AuthorModel.create(req.body) // The req.body property contains key-value pairs of data submitted in the request body.
      .then((newAuthor) => res.status(201).json(newAuthor)) // A promise is returned by the previous mongoose method. A newUser is returned in JSON
      .catch((err) =>
        res.status(500).json({ message: "Something went wrong", error: err })
      ); // if it fails it returns an error
  },

  // Method to update one Author

  updateOneAuthorById: async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
      return res
        .status(400)
        .json({ message: "UAID doesn't match the specified format" });

    const updateOptions = {
      new: true, // Return the updated document
      runValidators: true, // Enforce validation during update
    };

    try {
      const updatedAuthor = await AuthorModel.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        updateOptions
      );
      if (updatedAuthor) {
        res.status(200).json(updatedAuthor);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (err) {
      if (err.name === "ValidationError") {
        return res
          .status(400)
          .json({ message: "Validation Errors", errors: err });
      }
      res.status(500).json({ message: "Something went wrong", errors: err });
    }
  },

  // Methods to delete data
  // Deleting one user
  deleteOneAuthorById: (req, res) => {
    if (!ObjectId.isValid(req.params.id))
      return res
        .status(400)
        .json({ message: "UAID doesn't match the specified format" });

    AuthorModel.deleteOne({ _id: req.params.id })
      .then((result) => {
        if (result.deletedCount === 0) {
          res.status(404).json({ message: "Author not found" });
        } else {
          res.status(200).json({ result: result });
        }
      })
      .catch((err) =>
        res.status(500).json({ message: "Something went wrong", error: err })
      );
  },

  // Deleting all users
  deleteAllAuthors: (req, res) => {
    AuthorModel.deleteMany() // Mongoose method to delete everything
      .then((result) => res.status(200).json(result))
      .catch((err) =>
        res.status(500).json({ message: "Something went wrong", error: err })
      );
  },
};
