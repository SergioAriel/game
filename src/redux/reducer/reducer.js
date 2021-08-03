import * as actionTypes from '../actions-types/actions-types'

const initialState = {
    map: [],
    position:{
        x: 1,
        y: 9
    }
}

const rootReducer = (state = initialState, actions) => {
    switch (actions.type){
        case actionTypes.MOVE:
            return {
                ...state,
                position: {
                    x :  state.position.x + actions.payload.x,
                    y :  state.position.y + actions.payload.y
                }
            }
        case actionTypes.ADDMAP:
            return {
                ...state,
                map: actions.payload
            }
        case actionTypes.INITIALPOSITION:
            return {
                ...state,
                position: {
                    x: actions.payload.x,
                    y: actions.payload.y
                }
            }
        default : 
            return state
        
    }
}

export default rootReducer