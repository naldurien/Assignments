import * as actionTypes from '../actions/actionTypes'

const initialState = {
    count: 0,
    cart: [],
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                count: state.count + 1,
                cart: state.cart.concat(action.payload)
            }
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                ctr: state.ctr -1,
                cart: state.cart.filter((item) => item.title !== action.payload)
            }
        default: 
            return state 
    }
}

export default reducer