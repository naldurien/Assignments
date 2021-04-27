import * as actionTypes from '../actions/actionTypes'

const initialState = {
    favoriteBooks: [] 
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.ADD_FAVORITE:
            return {
                ...state,
                favoriteBooks: state.favoriteBooks.concat(action.payload)
            }
        default: 
            return state 
    }
}


export default reducer