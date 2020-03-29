import React, { Component } from 'react'

export default class Like extends Component {
  constructor() {
      super()
      this.state = {
          isLiked: false
      }
  }
  handleLikeClick = () => {
    // setState 方法1
    // this.setState({
    //     isLiked: !this.state.isLiked
    // })
    // 方法2
    this.setState((preState) => {
        console.log(preState)
        return {
            isLiked: !this.state.isLiked
        }
    })
  }
  render() {
    return (
      <div>
          <button onClick={this.handleLikeClick}>
              {this.state.isLiked ? '喜欢' : '不喜欢'}
          </button>
      </div>
    )
  }
}
