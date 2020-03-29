import React, { Component } from 'react'

// shouldComponentUpdate 相关： import { PureComponent }  from 'react


const noop = () => {};
export default class TodoItem extends Component {
  constructor() {
    super();
    this.state = {
      finishText: ''
    }
  }
  static getDerivedStateFromProps(props) {
    return {
      finishText: props.finish ? '完成' : '未完成'
    }
  }

  onHandlerFinishedChange = () => {
    // this.props.onFinishedChange && this.props.onFinishedChange(this.props.id); // 判断方法是否传入
    const {
      onFinishedChange = noop, //若未传入，则赋值为空函数
      id,
    } = this.props;
    onFinishedChange(id);
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.finish !== this.props.finish; 
    /**
     *  shouldComponentUpdate 生命周期在 render 之前
     *  判断，只有当 props 或 state 发生变动时再触发render
     *  如果没有这个判断， 每变更一个 item ，所有的 TodoItem 都会触发render， 
     * */ 
  }
  render() {
    console.log('life render')
    const {
      finish,
      name
    } = this.props
    return (
      <li>
        <input type="checkbox" onChange={this.onHandlerFinishedChange} checked={finish}></input> 
        <span>
          {name} {this.state.finishText}
        </span>
      </li>
    )
  }
}
