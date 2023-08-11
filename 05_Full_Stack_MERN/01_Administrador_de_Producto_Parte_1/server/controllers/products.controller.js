const ProductModel = require("../models/products.model"); // We import the model created in the .model.js file saved in the models folder

// We export the controller functions we will be using. Modules are components with one or more functions. These modules are exported to be used on
// some other part of the app (the user routes). This module provides the necessary methods to make API requests.

module.exports = {
  // Method to get all users
  getAllProducts: (req, res) => {
    // This method consists of a key paired with an arrow function
    ProductModel.find() //
      .then((allProducts) => res.status(200).json(allProducts)) // A promise is returned by the previous mongoose method. All users are returned in JSON
      .catch((err) =>
        res.status(500).json({ message: "Something went wrong", error: err })
      ); // if it fails it returns an error
  },

  // Method to get one user by Id
  getOneProductById: (req, res) => {
    // This method consists of a key paired with an arrow function
    ProductModel.findById(req.params.id) // This property is an object containing the property id
      .then((oneProduct) => res.status(200).json(oneProduct)) // A promise is returned by the previous mongoose method. The user is returned in JSON
      .catch((err) =>
        res.status(404).json({ message: "Product not found", error: err })
      ); // if it fails it returns an error
  },

  // Method to create a user
  createNewProduct: (req, res) => {
    // This method consists of a key paired with an arrow function
    ProductModel.create(req.body) // The req.body property contains key-value pairs of data submitted in the request body.
      .then((newProduct) => res.status(201).json(newProduct)) // A promise is returned by the previous mongoose method. A newUser is returned in JSON
      .catch((err) =>
        res.status(500).json({ message: "Something went wrong", error: err })
      ); // if it fails it returns an error
  },

  // Methods to delete data
  deleteAllProducts: (req, res) => {
    ProductModel.deleteMany() // Mongoose method to delete everything
      .then((result) => res.status(200).json(result))
      .catch((err) =>
        res.status(500).json({ message: "Something went wrong", error: err })
      );
  },
};
