import  actionType from './actionType'

export const increase = (id) => {
    return {
        type: actionType.ADD_CART_INCREASE,
        payload: {
            id
        }
    }
}

export const decrease = (id) => {
    return {
        type: actionType.ADD_CART_DECREASE,
        payload: {
            id
        }
    }
}