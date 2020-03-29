import React, { Component } from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'
export default class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      finish: PropTypes.bool.isRequired
    })).isRequired
  }
  render() {
    return (
      <ul>
        {
          this.props.todos.map(item => {
          return  <TodoItem key={item.id} {...item} onFinishedChange={this.props.onFinishedChange}/> // tips: 解构传参 
          // onFinishedChange组件传参 从 App.js -> TodoList -> TodoItem, 适用于三层以内组件
          })
        }
      </ul>
    )
  }
}

  