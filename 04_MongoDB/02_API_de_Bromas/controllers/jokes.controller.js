const mongoose = require("mongoose"); // We import Mongoose to use ObjectId
const JokesModel = require("../models/jokes.model"); // We import the model created in the .model.js file saved in the models folder
const { ObjectId } = mongoose.Types; // Destructuring assignment to get ObjectId

// We export the controller functions we will be using. Modules are components with one or more functions. These modules are exported to be used on
// some other part of the app (the user routes). This module provides the necessary methods to make API requests.

module.exports = {
  // Method to get all users
  getAllJokes: (req, res) => {
    // This method consists of a key paired with an arrow function
    JokesModel.find() //
      .then((allJokes) => res.status(200).json(allJokes)) // A promise is returned by the previous mongoose method. All users are returned in JSON
      .catch((err) =>
        res.status(500).json({ message: "Something went wrong", error: err })
      ); // if it fails it returns an error
  },

  // Method to get one user by Id
  getOneJokeById: (req, res) => {
    // This method consists of a key paired with an arrow function
    JokesModel.findById(req.params.id) // This property is an object containing the property id
      .then((oneJoke) => res.status(200).json(oneJoke)) // A promise is returned by the previous mongoose method. The user is returned in JSON
      .catch((err) =>
        res.status(404).json({ message: "Joke not found", error: err })
      ); // if it fails it returns an error
  },

  // Method to create a user
  createNewJoke: (req, res) => {
    // This method consists of a key paired with an arrow function
    JokesModel.create(req.body) // The req.body property contains key-value pairs of data submitted in the request body.
      .then((newJoke) => res.status(201).json(newJoke)) // A promise is returned by the previous mongoose method. A newUser is returned in JSON
      .catch((err) =>
        res.status(500).json({ message: "Something went wrong", error: err })
      ); // if it fails it returns an error
  },

  // Method to update one Joke

  updateOneJokeById: async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
      return res
        .status(400)
        .json({ message: "UJID doesn't match the specified format" });

    try {
      const updatedJoke = await JokesModel.findOneAndUpdate(
        { _id: req.params.id },
        req.body
      );
      if (updatedJoke) {
        res.status(200).json(updatedJoke);
      } else {
        res.status(404).json({ message: "Joke not found" });
      }
    } catch (err) {
      res.status(500).json({ message: "Something went wrong", errors: err });
    }
  },

  // Method to delete one user
  deleteOneJokeById: (req, res) => {
    if (!ObjectId.isValid(req.params.id))
      return res
        .status(400)
        .json({ message: "UJID doesn't match the specified format" });

    JokesModel.deleteOne({ _id: req.params.id })
      .then((result) => {
        if (result.deletedCount === 0) {
          res.status(404).json({ message: "Joke not found" });
        } else {
          res.status(200).json({ result: result });
        }
      })
      .catch((err) =>
        res.status(500).json({ message: "Something went wrong", error: err })
      );
  },

  // Methods to delete all data
  deleteAllJokes: (req, res) => {
    JokesModel.deleteMany() // Mongoose method to delete everything
      .then((result) => res.status(200).json(result))
      .catch((err) =>
        res.status(500).json({ message: "Something went wrong", error: err })
      );
  },
};
