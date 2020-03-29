import React, { Component, createRef} from 'react'
//通过 ref 来获取react组件或 dom 元素，要使用 ref 之前必须先调用 React.createRef 方法 来创造一个 ref
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
      inputValue: ''
    }
    // 在 constructor  中创建 ref
    this.inputDom = createRef();
  }
  handleInputChange = (e) => {
    this.setState({
        inputValue: e.currentTarget.value
    })
  }
  handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      this.props.addTodo(this.state.inputValue);
    }
  }
  handleBtnClick = () => {
    if (!this.state.inputValue) return;
    this.props.addTodo(this.state.inputValue);
    this.setState({
      inputValue: ''
    },() => {
      this.inputDom.current.focus();
    })
  }
  render() {
    return (
      <div>
        <input 
          onChange={this.handleInputChange} 
          value={this.state.inputValue}
          onKeyUp= {this.handleKeyUp}
          ref={this.inputDom}
        ></input>
        <button onClick={this.handleBtnClick}>{this.props.btnText}</button>
      </div>
    )
  }
}
