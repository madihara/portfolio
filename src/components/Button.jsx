import React from 'react'
import {BsArrowUpShort} from 'react-icons/bs'

import styles from '../styles/button.module.css'

const Button = ({icon}) => {
  return (
    <span>
      <div className={styles.container}>
        <a href='#top'>
          <BsArrowUpShort style={{ fontSize: '2.4rem'}}/>
        </a>
      </div>
    </span>
  )
}

export default Button 