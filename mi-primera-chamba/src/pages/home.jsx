import React, { useState } from 'react'
import Header from '../componentes/header/header'
import Main from '../componentes/main/main'
import Footer from '../componentes/footer/footer'

const Home = (props) => {
  const [pagina,setPagina] = useState("")

  const handleCambioPagina = (nuevaPagina) => {
    setPagina(nuevaPagina)
  }

  console.log(pagina);

  return (
    <div>
      <Header cambioPagina={handleCambioPagina} />
      <Main pagina={pagina}/>
      <Footer/>
    </div>
  )
}

export default Home
