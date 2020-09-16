import React, {useState} from 'react'
import styles from '../styles/mobilenav.module.css'
import logo from '../images/MH.png'

import {FiMenu} from 'react-icons/fi'

const Mobilenav = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.logoBox}>
          <img className={styles.logo} src={logo} />
        </div>
        <button className={styles.navButton}
        onClick={() => setOpen(!isOpen)}>
          <FiMenu style={{fontSize: '1.4rem'}}/>
        </button>
        <div className={ isOpen?  styles.nav : styles.hide}>
          <ul>
          <li>
              <a href="#main"
              onClick={() => setOpen(false)}>about</a>
            </li>
            <li>
              <a href="#projects"
              onClick={() => setOpen(false)}>projects</a>
            </li>
            <li>
              <a href="#contact"
              onClick={() => setOpen(false)}>contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}


export default Mobilenav;