import { useEffect, useState } from "react";
// useEffect => fire function when rendered

// components
import WorkoutDetails from '../components/Workout_details'
import WorkoutForm from '../components/Workout_form'


const Home = () => {
  const [workouts, setWorkouts] = useState(null)

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workout')
      const json = await response.json(); // json is an array of objects, from the backend

      if (response.ok) {
        setWorkouts(json)
      }
    }

    fetchWorkouts() //? wait `async` inside and not outside ?
  }, [])

  return (
    <div className="home">
      <div className="workouts">
        {
        workouts && workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))
          // `() => ()`, not {} => returning a template
          // only if `workouts != null, then we map through `workouts`
        }
      </div>
      <WorkoutForm />
    </div>
  )
}

export default Home ;