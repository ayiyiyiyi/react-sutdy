import actionType from './actionType'

export const increase = (id) => {
    return {
        type: actionType.ADD_CART_INCREASE,
        payload: {
            id
        }
    }
}

// 异步 action， 使用 redux-thunk 之后， 就可以在 actionCreator 中 return 一个方法，方法的参数是 dispatch
// id => dispatch =>{} ES6语法， 函数里返回一个函数
export const increaseAsync = id => dispatch => {
    setTimeout(() => {
        // dispatch({
        //     type: actionType.ADD_CART_INCREASE,
        //     payload: { id }
        // })
       
        dispatch(increase(id))  /** 相当于手动 dispatch 了上方的 同步 action*/
    }, 2000)
}

export const decrease = (id) => {
    return {
        type: actionType.ADD_CART_DECREASE,
        payload: {
            id
        }
    }
}