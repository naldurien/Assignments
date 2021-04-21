import * as actionTypes from '../actions/actionTypes'

export const ADD_TO_CART = (book) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload : book
    }
}

export const ADD_FAVORITE = (book) => {
    return {
        type: actionTypes.ADD_FAVORITE,
        payload : book
    }
}
