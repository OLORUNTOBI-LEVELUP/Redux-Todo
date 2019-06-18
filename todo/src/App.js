import React from "react"
import "./App.css"

import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm"

const App = () => {
  return (
    <div className="App">
      <TodoForm />
      <TodoList />
    </div>
  )
}

export default App