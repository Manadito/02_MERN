const { faker } = require("@faker-js/faker"); // This imports the faker API
const express = require("express"); // This imports the express library

const app = express(); // This initializes the express instance app with all its methods
const port = 8000; // We define an auxiliary variable to save our port data in

app.use(express.json()); // Enable middleware to read JSON
app.use(express.urlencoded({ extended: true })); // Enable middleware to parse url encoded data

// Defining fake Models

// User

class User {
  constructor() {
    this.firstName = faker.person.firstName();
    this.lastName = faker.person.lastName();
    this.phoneNumber = faker.phone.number();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
  }
}

// Company

class Company {
  constructor() {
    this.name = faker.company.name();
    this.address = {
      street: faker.location.street(),
      city: faker.location.city(),
      state: faker.location.state(),
      zipCode: faker.location.zipCode(),
      country: faker.location.country(),
    };
  }
}

// Setting up the routes

// Route for creating a new user

app.get("/api/users/new", (req, res) => {
  let newUser = new User();
  res.json({ user: newUser });
});

// Route for creating a new company

app.get("/api/company/new", (req, res) => {
  let newCompany = new Company();
  res.json({ company: newCompany });
});

// Route for creting a new user and a new company

app.get("/api/users/company", (req, res) => {
  let newUser = new User();
  let newCompany = new Company();
  res.json({
    user: newUser,
    company: newCompany,
  });
});

app.listen(port, () => console.log(`Listening on port: ${port}`)); // Used to bind and listen to the connections on the specified host and port
