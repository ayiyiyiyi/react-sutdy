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
  }
  handleInputChange = (e) => {
    this.setState({
        inputValue: e.currentTarget.value
    })
  }
  render() {
    return (
      <div>
        <input onChange={this.handleInputChange} value={this.state.inputValue}></input>
        <button onClick={()=> {
          console.log(this.state)
        }}>{this.props.btnText}</button>
         {/** 不推荐该方式，因为这是匿名函数，每render一次, 便生成一个匿名函数 */}
      </div>
    )
  }
}
