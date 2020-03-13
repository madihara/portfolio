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
              <a href="#main">about</a>
            </li>
            <li>
              <a href="#projects">projects</a>
            </li>
            <li>
              <a href="contact">contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default NavBar