import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'

import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Button from './components/Button'

import './basestyles.css'


const App = () => {
  return (
    <ParallaxProvider>
      <Button id='#top' icon='top' />
      <NavBar />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </ParallaxProvider>


  )
}


export default App