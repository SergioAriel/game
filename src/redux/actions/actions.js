import * as actionsTypes from '../actions-types/actions-types'

export const InitialPosition = ( x, y ) => {
    return function ( dispatch ) {
        dispatch({ type: actionsTypes.INITIALPOSITION, payload: { x , y } })
   }
}

export const Move = ( x, y ) => {
    return function ( dispatch ) {
         dispatch({ type: actionsTypes.MOVE, payload: { x , y } })
    }
}

export const AddMap = (map) => {
    return function ( dispatch ) {
        dispatch({ type: actionsTypes.ADDMAP, payload: map })
   }
}