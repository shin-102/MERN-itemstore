import { useState } from "react"

const WorkoutForm = () => {
  const [title, setTitle] = useState('')
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault() // avoid refreshing page

    const workout = {title, load, reps}
    const response = await fetch('/api/workout', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    else {
      setTitle('')
      setLoad('')
      setReps('')
      setError(null)
      console.log('new workout added', json)
    }
  }

  return (
    <form action="" className="create" onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>

      <label>Exercise Title:</label>
      <input 
      type="text" 
      onChange={(e) => setTitle(e.target.value)}
      value={title}
      />

      <label>Load (in kg) :</label>
      <input 
      type="number" 
      onChange={(e) => setLoad(e.target.value)}
      value={load}
      />

      <label>Reps :</label>
      <input 
      type="number" 
      onChange={(e) => setReps(e.target.value)}
      value={reps}
      />
      <button type="submit">Add Workout</button> {/*added submit type*/}
      {error && <div className="error">{error}</div>}
    </form>

    
  )
}
// e is event object, e.target is input field


export default WorkoutForm

