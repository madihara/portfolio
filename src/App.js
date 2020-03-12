import React from 'react'

import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Projects from './components/Projects'

import './basestyles.css'


const App = () => {
  return (
    <div>
      <h1>
        <NavBar />
        <Hero />
        <Projects />
        <Contact />
        <Footer />
      </h1>
    </div>
  )
}


export default App