import React, { Component } from 'react'
import {increase, decrease, increaseAsync} from './../../actions/cart'
import { connect } from 'react-redux'
import './style.css'

class Cart extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    console.log(this.props)
    return (
        <div>
        <div className="table header">
          <div>id</div>
          <div>name</div>
          <div>count</div>
          <div>operation</div>
        </div>
        {
          this.props.cartList.map(item => {
            return (
              <div className="table" key={item.id}>
                <div>{item.id}</div>
                <div>{item.title}</div>
                <div>{item.count}</div>
                <div>
                    <button onClick={() => {
                      this.props.increaseAsync(item.id)
                    }}> 过两秒再加 </button>
                    <button onClick={() => {
                      this.props.increase(item.id)
                    }}>+</button>
                    &nbsp;&nbsp;&nbsp;
                    <button onClick={() => {
                      this.props.decrease(item.id)
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
const mapStateToProps = (state) => {
  return {
    cartList: state.cart
  }
}

//把 dispatch 方法 绑定到 props 的方法一

// const mapDispatchToProps = dispatch => {
//   return {
//     increase: (id) => dispatch(increase(id)),
//     decrease: (id) => dispatch(decrease(id))
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Cart)

//方法二
export default connect(mapStateToProps, {increase, decrease, increaseAsync})(Cart)