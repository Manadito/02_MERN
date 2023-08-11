// We import the controller methods from our controllers folder and the Express Third-party Library
const {
  getAllJokes,
  getOneJokeById,
  createNewJoke,
  updateOneJokeById,
  deleteOneJokeById,
  deleteAllJokes,
} = require("..//controllers/jokes.controller"); // We destructure this object literal to obtain createNewUser
const express = require("express"); // This imports the express library

// We create a router instance
const JokesRouter = express.Router(); // This is a class used to create modular, mountable route handlers

// We link routes with the particular controller methods (from the controllers we create in controllers.js)
JokesRouter.get("/", getAllJokes); // We can reduce "/api/users" to "/"
JokesRouter.get("/:id", getOneJokeById);
JokesRouter.post("/", createNewJoke);
JokesRouter.put("/:id", updateOneJokeById);
JokesRouter.delete("/:id", deleteOneJokeById); // Remember to always use the correct verb
JokesRouter.delete("/", deleteAllJokes);

// We export the Router method we have just created
module.exports = JokesRouter;
