import React, { Component } from 'react'
import {createIncrease, createDecrease} from './../../actions/cart'

import './style.css'

export default class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cartList: []
    };
  }
  getCartList = () => {
    this.setState({
      cartList: this.props.store.getState().cart
    })
  }
  componentDidMount = () => {
    this.getCartList()
    this.props.store.subscribe(this.getCartList)
  }
  increaseCount = (e) => {
    let id = e.target.dataset.id;
    console.log(createIncrease(id));
    this.props.store.dispatch(createIncrease(id));
  }
  render() {
    return (
        <div>
        <div className="table header">
          <div>id</div>
          <div>name</div>
          <div>count</div>
          <div>operation</div>
        </div>
        {
          this.state.cartList.map(item => {
            return (
              <div className="table" key={item.id}>
                <div>{item.id}</div>
                <div>{item.title}</div>
                <div>{item.count}</div>
                <div>
                    {/* <button data-id={item.id} onClick={this.increaseCount}>+</button> */}
                    {/* 为什么这样不行？ 一定要传入一个匿名函数？？？ */}
                    <button onClick={() => {
                      this.props.store.dispatch(createIncrease(item.id));
                    }}>+</button>
                    &nbsp;&nbsp;&nbsp;
                    <button onClick={() => {
                      this.props.store.dispatch(createDecrease(item.id));
                    }}>-</button>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}
