const Workout = require('../models/workout_model')
const mongoose = require('mongoose')

//* GET all workouts
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({createdAt: -1}) //Descending order

  res.status(200).json(workouts);
}


//* GET a single workout
const getWorkout = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such workout'})
  } // check if ID is valid by mongoose

  const workout = await Workout.findById(id)

  if (!workout) {
    return res.status(404).json({error: 'No such workout'})
  }

  res.status(200).json(workout);
}


//* CREATE new workout
const createWorkout = async (req, res) => {
  const {title, reps, load} = req.body;
  // add doc to db
  try {
    const workout = await Workout.create({title, reps, load}) //? async function
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}


//* DELETE a workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params ;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such workout'})
  } // check if ID is valid by mongoose

  const workout = await Workout.findOneAndDelete({_id: id}) // _id is property name in MongoDB

  if (!workout) {
    return res.status(404).json({error: 'No such workout'})
  }

  res.status(200).json(workout);
}


//* UPDATE a workout
const updateWorkout = async (req, res) => {
  const { id } = req.params ;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such workout'})
  } // check if ID is valid by mongoose

  const workout = await Workout.findOneAndUpdate({_id: id}, {
    ...req.body // "..." spread the props into new object
  })

  if (!workout) {
    return res.status(404).json({error: 'No such workout'})
  }

  res.status(200).json(workout);
}


// EXPORTING

module.exports = {
  getWorkout,
  getWorkouts,
  createWorkout,
  deleteWorkout,
  updateWorkout
}