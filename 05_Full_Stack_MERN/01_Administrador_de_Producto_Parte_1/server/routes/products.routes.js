// We import the controller methods from our controllers folder and the Express Third-party Library
const {
  getAllProducts,
  getOneProductById,
  createNewProduct,
  deleteAllProducts,
} = require("..//controllers/products.controller"); // We destructure this object literal to obtain createNewUser
const express = require("express"); // This imports the express library

// We create a router instance
const ProductRouter = express.Router(); // This is a class used to create modular, mountable route handlers

// We link routes with the particular controller methods (from the controllers we create in controllers.js)
ProductRouter.get("/", getAllProducts); // We can reduce "/api/users" to "/"
ProductRouter.get("/:id", getOneProductById);
ProductRouter.post("/", createNewProduct);
ProductRouter.delete("/", deleteAllProducts);

// We export the Router method we have just created
module.exports = ProductRouter;
