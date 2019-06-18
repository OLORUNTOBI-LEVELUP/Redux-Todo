import { ADD_TASK, TOGGLE_TASK } from "../actions/actions"
const initialSate = {
    todos: [
      {
        text: "Learn Redux",
        completed: false,
        id: 0
      },
      {
        text: "Play football",
        completed: false,
        id: 1
      },
      {
        text: "Watch the NBA finals",
        completed: false,
        id: 2
      }
    ]
  }
const todoReducer = (state = initialSate, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
          id: action.id
        }
      ]
    case TOGGLE_TASK:
      return state.map(task =>
        task.id === action.id ? { ...task, completed: !task.completed } : task
      )
    default:
      return state
  }
}

export default todoReducer