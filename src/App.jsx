import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { maps } from './JSON/maps'
import Map from './components/map/map'
import ModalWin from './components/modalwin/modalwin'
import PJ from './components/pj/pj'
import './App.css';
import { AddMap, InitialPosition } from './redux/actions/actions'

function App() {
  const [ numMap, setNumMap ] = useState ( 0 )
  const dispatch = useDispatch()
  const statePosition = useSelector(state => state.position)

  useEffect(()=> {
    if(maps[numMap] != undefined){
      dispatch(AddMap(maps[numMap]))
      const initialPosition = maps[numMap].find( (pos) => pos.start === true);
      console.log(initialPosition)
      dispatch(InitialPosition( initialPosition.x, initialPosition.y ))
    }
  }, [numMap])

  useEffect(()=>{
    const salida = maps[numMap].find((pos) => 
      (statePosition.x === pos.x) && (statePosition.y === pos.y) && pos.start === false
    )
    if(salida){
      maps[numMap + 1] != undefined && setNumMap(numMap => numMap + 1)
    }
  }, [statePosition]) 

  return (
    <div className="App">

      <Map/>
      <PJ/>
    
    </div>
  );
}

export default App;