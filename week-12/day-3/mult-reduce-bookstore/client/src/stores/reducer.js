import * as actionTypes from './actions/actionTypes'


const initialState = {
    count: 0,
    cart: [],
    isAuthenticated: false,
    favoriteBooks: [] 
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                count: state.count + 1,
                cart: state.cart.concat(action.payload)
            }
        case actionTypes.ADD_FAVORITE:
            return {
                ...state,
                favoriteBooks: state.favoriteBooks.concat(action.payload)
            }
        case actionTypes.LOGIN:
            return {
                ...state, 
                isAuthenticated: true 
            }
        case actionTypes.LOGOUT:
            return {
                ...state, 
                isAuthenticated: false 
            }
        default: 
            return state 
    }
}


export default reducer