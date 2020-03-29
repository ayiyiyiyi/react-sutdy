import  actionType from './actionType'

export const createIncrease = (id) => {
    return {
        type: actionType.ADD_CART_INCREASE,
        payload: {
            id
        }
    }
}

export const createDecrease = (id) => {
    return {
        type: actionType.ADD_CART_DECREASE,
        payload: {
            id
        }
    }
}