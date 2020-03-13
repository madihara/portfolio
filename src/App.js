import React from 'react'

import Button from './components/Button.jsx'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import SocialButtonContainer from './components/socials/SocialButtonContainer'


import './basestyles.css'


const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
      <Button />
      <SocialButtonContainer />
    </>


  )
}


export default App