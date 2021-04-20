import * as actionTypes from '../actions/actionTypes'

export const incrementCounter = () => {
    return {
        type: actionTypes.INCREMENT
    }
}
export const decrementCounter = () => {
    return {
        type: actionTypes.DECREMENT
    }
}

export const addToCounter = (payload) => {
    return {
        type: actionTypes.ADD,
        payload: payload
    }
}
export const subtractFromCounter = (payload) => {
    return {
        type: actionTypes.SUBTRACT,
        payload: payload
    }
}