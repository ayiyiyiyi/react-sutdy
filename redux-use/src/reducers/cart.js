import actionType from './../actions/actionType'

const initState = [{
        id: 1,
        title: 'apple',
        count: 10
    },
    {
        id: 2,
        title: 'orange',
        count: 20
    },
    {
        id: 3,
        title: 'peach',
        count: 30
    }
];

export default (state = initState, action) => {
    switch (action.type) {
        case actionType.ADD_CART_INCREASE:
            return state.map(item => {
                if (item.id === action.payload.id) {
                    item.count += 1;
                }
                return item;
            });
        case actionType.ADD_CART_DECREASE:
            return state.map(item => {
                if (item.id === action.payload.id) {
                    item.count -= 1;
                }
                return item;
            });
        default:
            return state;
    }
}