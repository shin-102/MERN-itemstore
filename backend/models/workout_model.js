const mongoose = require('mongoose');

//* Schema
// Define structure of document

const Schema = mongoose.Schema
// Create Schema function

const workoutSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  reps: {
    type: Number,
    required: true
  },
  load: {
    type: Number,
    required: true
  }
},{ timestamps: true } )

// passing an object as an argument for the Schema function

//* Model
//
module.exports = mongoose.model('Workout', workoutSchema);
