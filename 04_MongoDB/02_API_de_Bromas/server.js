const express = require("express"); // This imports the express library

const app = express(); // This initializes the express instance app with all its methods
const port = 8000; // We define an auxiliary variable to save our port data in

app.use(express.json()); // Enable middleware to read JSON
app.use(express.urlencoded({ extended: true })); // Enable middleware to parse url encoded data

require("./config/mongoose.config"); // This calls the Mongoose Config file ... remember to have mongo running

// --------------------------------------------------------------------------------------------------------------------------------------
// Here we take the router instance from step 5 and import it over

const JokesRouter = require("./routes/jokes.routes");
app.use("/api/jokes", JokesRouter);

// --------------------------------------------------------------------------------------------------------------------------------------

app.listen(port, () => console.log(`Listening on port: ${port}`)); // Used to bind and listen to the connections on the specified host and port
