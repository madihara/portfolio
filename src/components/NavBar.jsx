import React from 'react'
import styles from '../styles/navbar.module.css'
import logo from '../images/MH.png'

const NavBar = () => {
  return (
    <>
      <a id="top"></a>
      <header>
        <img src={logo} alt="" className={styles.logo} />
        <nav>
          <ul>
            <li>
              about me
          </li>
            <li>
              projects
         </li>
            <li>
              contact
         </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default NavBar