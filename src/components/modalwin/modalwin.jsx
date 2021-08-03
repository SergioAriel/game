import React from 'react'
import { useSelector } from 'react-redux'
import * as styles from './modalwin.module.css'

function ModalWin() {

  return (
    <div className = { styles.container }>
        <div className = { styles.modal } >
            Win!
        </div>
    </div>
  )
}

export default ModalWin