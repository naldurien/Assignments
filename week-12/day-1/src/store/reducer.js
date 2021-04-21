const initialState = {
    count: 27,
    randomImages: []
}

const reducer = (state = initialState, action) => {
    if(action.type === 'INCREMENT') {
        return {
            ...state,
            count: state.count + 1
        }
    } else if(action.type === 'DECREMENT') {
        return {
            ...state,
            count: state.count - 1
        }
    } else if(action.type === 'ADD') {
        return {
            ...state,
            count: state.count + action.payload
        }
    } else if(action.type === 'SUBTRACT') {
        return {
            ...state,
            count: state.count - action.payload
        }
    } else if(action.type === 'ADD_RANDOM_IMAGE') {
        return {
          ...state,
          randomImages: state.randomImages.concat(action.payload)
        }
    }
    return state
}

export default reducer
