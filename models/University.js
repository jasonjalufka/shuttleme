const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UniversitySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true,
    unique: true
  },
  location: {
    type: String,
    required: true,
    unique: true
  }
});
