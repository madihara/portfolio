import React from 'react'

import styles from '../styles/button.module.css'

const Button = ({ id, icon }) => {
  return (
    <span>
      <div className={styles.container}>
        <a href={id}>{icon}</a>
      </div>
    </span>
  )
}

export default Button 