import React, { Component } from 'react'
import propTypes from 'prop-types'
export default class TodoInput extends Component {
  static propTypes = {
    btnText: propTypes.string
  }
  static defaultProps = {
    btnText: "ADD"
  }
  constructor() {
    super();
    this.state = {
      inputValue: 'xxxx'
    }
    this.handleBtnClick = this.handleBtnClick.bind(this); //见阮一峰ES6 class 用法
  }
  handleInputChange = (e) => {
    this.setState({
        inputValue: e.currentTarget.value
    })
  }
  handleBtnClick() {
    console.log(this.state) //会报错，原因是this的指向不对，所以最好是用箭头函数绑定上下文
    /**
     *  在JSX语法中: onClick={  function  }  onClick这个属性本身只是一个"中间变量"。
     * 将函数赋值给onClick这个中间变量，后面不仅要进行JSX语法转化,将JSX组件转换成Javascript对象,
     * 还要再将Javascript对象转换成真实DOM。把onClick作为中间变量,指向一个函数的时候,后面的一系列处理中，
     * 使用onClick这个中间变量所指向的函数，里面的this自然就丢失掉了，不是再指向对象实例了。
     */
  }
  render() {
    return (
      <div>
        <input onChange={this.handleInputChange} value={this.state.inputValue}></input>
        <button onClick={this.handleBtnClick.bind(this)}>{this.props.btnText}</button> 
        {/** 这种方式不好，因为每次render时都要bind一次，最好在构造函数时绑定事件处理函数*/}
      </div>
    )
  }
}
