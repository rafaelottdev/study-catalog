import "./styles/App.css"

import './styles/reset.css'
import './styles/variables.css'

import Header from './layouts/Header/Header'
import MainLayout from './layouts/Main/MainLayout'

import { useEffect, useState } from "react"
import Footer from "./layouts/Footer/Footer"

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
    <div className="page_container">
      <Header scrollPosition={scrollPosition} />

      <MainLayout />

      <Footer />
    </div>
  )
}

export default App

// fazer a pagina do typescript

// consertar o tamanho dos icones na home -> habilidades

// tirar o fundo vermelho da capa do cinemidia no projetos

// deixar mais lendo o video da capa do cinemidia e fazer com que fique um tempo parado na home pra depois começar o video

// colocar uma sobra nos cards do projetos

// na pagina de estudos fazer para quando clicar em um dos estudos o menu fechar, ou quando clicar fora fechar tbm

// colocar um icone de folder+flecha apontando pro folder pra mostrar que são caminhos, na pagina estudos (em todos)