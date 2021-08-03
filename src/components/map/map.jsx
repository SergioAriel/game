import React from 'react'
import { useSelector } from 'react-redux'
import * as styles from './map.module.css'

function Map() {

  const stateMap = useSelector(state => state.map)

  return (
    <div className={ styles.map }>
      {
        stateMap.map( (sector, index) => {
          switch (sector.type){
            case "floor":
              return <div 
                    className = { styles.floor }
                    key={index}
                    />  
            case "door":
              return <div 
                      className = { styles.door }
                      key={index}
                    >
                          { sector.start != false ? "Start" : "Exit" }
                    </div>
            case "block":
                    return <div 
                    className = { styles.block }
                    key={index}
                  />

          }
        })
      }
    </div>
  )
}

export default Map