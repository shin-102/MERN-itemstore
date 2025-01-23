require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workout');

// express app
const app = express()

// Middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})
//* next SHOULD be used at the end to go to next middleware

// Routes
app.use('/api/workout',workoutRoutes);

// Connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to DB & listening on port 4000');
    });
  })
  .catch(() => {
    console.log(error)
  })

