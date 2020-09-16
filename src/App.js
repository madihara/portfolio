import React, {useState, useEffect} from 'react'

import Button from './components/Button.jsx'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import MobileNav from './components/MobileNav'
import Projects from './components/Projects'
import SocialButtonContainer from './components/socials/SocialButtonContainer'


import './basestyles.css'


const App = () => {

  const width = useWindowSize()
  
  let navbar;
  if(width > 936) {
    navbar = <NavBar />
  } else{
  navbar = <MobileNav /> 
  }

  return (
    <>
      {navbar}
      <Hero />
      <Projects />
      <Contact />
      <Footer />
      <Button />
      <SocialButtonContainer />
    </>


  )
}

const useWindowSize = (initialState= '100%') => {
  const [size, setSize] = useState(initialState) 
  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  },[])
  return size
}

export default App