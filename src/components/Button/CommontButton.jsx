import React from 'react'
import styles from './CommonButton.module.css'

function CartButton({text=""}) {
  return (
    <div className={styles.textHeading}>
        <div className={styles.textColor}>{text}</div>
    </div>
  )
}

export default CartButton