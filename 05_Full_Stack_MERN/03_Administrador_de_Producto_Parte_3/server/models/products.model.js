const mongoose = require("mongoose"); // Import library to use its methods and custom functionalities to manipulate MongoDB docs

const ProductSchema = new mongoose.Schema( // Creating our schema (blueprint)
  {
    title: {
      type: String,
      required: [true, "A product title is required"],
    },
    price: {
      type: Number,
      required: [true, "A product price is required"],
    },
    description: {
      type: String,
      required: [true, "description is required"],
    },
  },
  {
    timestamps: true,
  }
);

const ProductModel = mongoose.model("Product", ProductSchema); // We define our model as a variable

module.exports = ProductModel; // We export our model

// A Schema is the configuration object for a Mongoose model. It is how we setup our model. A SchemaType is the configuration object for an
// individual property within our model.
