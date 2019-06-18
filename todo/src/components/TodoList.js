import React, { Component } from "react"
import Todo from "./Todo"

import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { toggleTask, deleteTask } from "../Redux"

export class TodoList extends Component {
  render() {
    const tasks = this.props.tasks || []
    return (
      <div>
        {tasks.map(task => (
          <Todo
            key={task.id}
            task={task}
            toggleTask={this.props.toggleTask}
            deleteTask={this.props.deleteTask}
          />
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleTask, deleteTask }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)