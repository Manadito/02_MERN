// We import the controller methods from our controllers folder and the Express Third-party Library
const {
  getAllAuthors,
  getOneAuthorById,
  createNewAuthor,
  updateOneAuthorById,
  deleteOneAuthorById,
  deleteAllAuthors,
} = require("..//controllers/author.controller"); // We destructure this object literal to obtain createNewUser
const express = require("express"); // This imports the express library

// We create a router instance
const AuthorRouter = express.Router(); // This is a class used to create modular, mountable route handlers

// We link routes with the particular controller methods (from the controllers we create in controllers.js)
AuthorRouter.get("/", getAllAuthors); // We can reduce "/api/users" to "/"
AuthorRouter.get("/:id", getOneAuthorById);
AuthorRouter.post("/", createNewAuthor);
AuthorRouter.put("/:id", updateOneAuthorById);
AuthorRouter.delete("/:id", deleteOneAuthorById); // Remember to always use the correct verb
AuthorRouter.delete("/", deleteAllAuthors);

// We export the Router method we have just created
module.exports = AuthorRouter;
