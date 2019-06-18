import React from "react"
import Todo from "./Todo"

import { connect } from "react-redux"

const TodoList = props => {
  return (
    <div>
      <div className="todo-list">
        {props.todos.map(todo => (
          <Todo key={todo.id} id={todo.id} text={todo.text} />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(TodoList)