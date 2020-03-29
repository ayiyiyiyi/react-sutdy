import React, { Component, Fragment } from 'react'
import {TodoList, TodoHeader, TodoInput, Like, Counter} from './components'

import { getTodos } from './services'
export default class App extends Component {
  state = {
    title: '待办事项',
    article: '<p>this is an html</p>',
    todos: [],
    isLoading: true
  }
  constructor() {
    super()
    this.state.x = 1; // 只有类组件才有state, 函数式组件无状态
  }
  componentDidMount() {
    this.getDate()
  }
  getDate = () => {
    getTodos()
    .then(res => {
      if (res.status === 200) {
        let data = res.data.slice(0, 10).map(item => {
          item.name = item.title;
          item.finish = item.completed;
          delete item.title;
          delete item.completed;
          return item;
        });
        this.setState({
          todos: data
        });
      }
    })
    .catch(err => {
      console.log(err)
    })
    .finally(() => {
      this.setState({
        isLoading: false
      })
    })
  }
  addTodo = (name) => {
    let newTodos = [...this.state.todos];
    newTodos.push({
      id: this.state.todos.length + 1,
      name: name,
      finish: false,
    })
    this.setState({
      todos: newTodos
    })
  }
  onFinishedChange = (id) => {
    this.setState((preState) => {
      return {
        todos: preState.todos.map(todo => {
          if (todo.id === id) {  
            todo.finish = !todo.finish
          }
          return todo;
        })
      }
    })
  }
  render() {
    return (
      <Fragment> {/** 空标签，相当于template，也可直接使用<></>*/}
        <TodoHeader title={this.state.title} a="1" b="2" x={this.state.x} y={2}>
            <span style={{color: 'red'}}>今日事今日毕</span>
        </TodoHeader>
        {
          <div dangerouslySetInnerHTML={{__html: this.state.article}}></div> //渲染服务端返回html, 相当 v-html
        }
        <TodoInput btnText="add" addTodo={this.addTodo}/ >
        {
          this.state.isLoading ? <div>加载中...</div> : <TodoList todos={this.state.todos} onFinishedChange={this.onFinishedChange}/> 
        }
        <Like></Like>
        <Counter></Counter>
      </Fragment>
    )
  }
}
