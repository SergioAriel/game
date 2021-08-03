import React, { useState, useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Move } from '../../redux/actions/actions'
import * as styles from  './pj.module.css'
import { useRef } from 'react'

function PJ() {
    const [ fuel, setFuel ] = useState (6)
    const statePosition = useSelector(state => state.position)
    const stateMap = useSelector(state => state.map)
    const refPJ = useRef()
    const dispatch = useDispatch()
    
    const  handleUserKeyPress = useCallback ( (e)=>{
        setFuel(fuel => ( fuel > 0 ) ? fuel - 1 : fuel)
        if(fuel > 0){
            switch(e.code){
                case "ArrowUp":
                    let blockUp = stateMap.find( (pos) => 
                    ( pos.y === statePosition.y + 1 ) && ( pos.x === statePosition.x )  && pos.type === "block")
                    if( statePosition.y < 9 && !blockUp ){
                        return dispatch(Move( 0, 1 ))
                    }
                    return
                case "ArrowDown":
                    let blockDown = stateMap.find( (pos) => 
                    ( pos.y === statePosition.y - 1 ) && ( pos.x === statePosition.x )  && pos.type === "block")
                    if( statePosition.y > 0 && !blockDown ){
                        return dispatch(Move( 0, -1 ))
                    }
                    return 
                case "ArrowLeft":
                    let blockLeft = stateMap.find( (pos) => 
                    ( pos.x === statePosition.x - 1 ) && ( pos.y === statePosition.y )  && pos.type === "block")
                    if( statePosition.x > 0 && !blockLeft ){
                        return dispatch(Move( -1, 0 ))
                    }
                    return 
                case "ArrowRight":
                    let blockRight = stateMap.find( (pos) => 
                    ( pos.x === statePosition.x + 1 ) && ( pos.y === statePosition.y )  && pos.type === "block")
                    if( statePosition.x < 3 && !blockRight ){
                        return dispatch(Move( 1, 0 ))
                    }
                    return 
            }
        }
    },[statePosition])

    useEffect(() => {
        window.addEventListener('keydown', handleUserKeyPress);
        return () => {
          window.removeEventListener('keydown', handleUserKeyPress);
        };
      }, [handleUserKeyPress]);

    useEffect (() => {
        
    }, [statePosition])

    return (
        <div className= {styles.pjContainer}>
            
        {
            stateMap.map(position =>  {
                if((position.x === statePosition.x) && (position.y === statePosition.y))
                {
                return(
                    <div 
                        ref = {refPJ}
                        className = {styles.pj}
                    >
                    </div>
                )}
                else{
                    return <div></div>
                }
            })
        }
        </div>
    )
}

export default PJ