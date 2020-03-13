import React from 'react'

import styles from './socialcontainer.module.css'

import github from '../../images/github-image.svg'
import twitter from '../../images/twitter.svg'
import email from '../../images/e-mail-envelope copy.svg'

const SocialButtonContainer = () => {
  return (
    <span style={{
      display: "flex",
      flexDirection: 'column',
      position: 'fixed',
      left: '15px',
      top: '40%'
    }}>
      <a href='https://github.com/madihara' target="_blank"><img src={github} alt="" className={styles.button} /></a>
      <a href='mailto:madisonharadine@gmail.com' target="_blank"><img src={email} alt="" className={styles.button} /></a>
      <a href='https://twitter.com/madisonharadine' target="_blank"><img src={twitter} alt="" className={styles.button} /></a>
    </span>
  )
}

export default SocialButtonContainer