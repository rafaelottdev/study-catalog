import "./styles/App.css"

import './styles/reset.css'
import './styles/variables.css'

import Header from './layouts/Header/Header'
import MainLayout from './layouts/Main/MainLayout'

import { useEffect, useState } from "react"

function App() {
  const [scrollPosition, setScrollPosition] = useState(0)

  const handleScroll = () => {
    setScrollPosition(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <Header scrollPosition={scrollPosition} />

      <MainLayout />
    </>
  )
}

export default App
