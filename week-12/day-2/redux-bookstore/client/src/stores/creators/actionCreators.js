import * as actionTypes from '../actions/actionTypes'

export const onAddToCart = (book) => {
    return {
        type: actionTypes.onAddToCart,
        payload : book
    }
}

export const LOGIN = () => {
    return {
        type: actionTypes.LOGIN
    }
}

export const LOGOUT = () => {
    return {
        type: actionTypes.LOGOUT
    }
}