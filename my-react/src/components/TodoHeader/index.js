import React from 'react'
import propTypes from 'prop-types'

// 函数式组件无生命周期？
export default function TodoList(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h3>{props.children}</h3>
      <p>a+b = {props.a + props.b}</p>
      <p>x+y = {props.x + props.y}</p>
    </div>
  )
}

TodoList.propTypes = {
  title: propTypes.string,
  x: propTypes.number.isRequired
}
TodoList.defaultProps = {
  title: 'this is  default title'
}

