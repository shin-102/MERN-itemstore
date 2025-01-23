import { createContext, useReducer } from "react";

export const WorkoutContext = createContext()

// provide the context to App. Component Tree => Context Provider Component
// 
export const workoutReducer = (state, action) => {
  switch (action.type) {
    case 'SET_WORKOUTS' : return { workout: action.payload }
    case 'CREATE_WORKOUT' : return { workout: [action.payload, ...state.workouts] }
    default: return state
  }
}
export const WorkoutContextProvider = ( {children} ) => {
  const [state, dispatch] = useReducer(workoutReducer, {
    workout: null
  })
  // ? useReducer hook => similar to useState 

  return (
    <WorkoutContext.Provider value={{state, dispatch}}>
      {children}
    </WorkoutContext.Provider>
  )
}
// removed export line and directly exported funtion on definition