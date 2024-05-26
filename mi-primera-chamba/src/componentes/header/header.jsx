import React from 'react'
import imagen from '../../assets/imagenes/pp.png'
import './header.css'
import '../hobby-card/hobby'
const Header = (props) => {
  const cambioPagina = props.cambioPagina;

  const manejarClick = (pagina) => {
    cambioPagina(pagina);
  }

  return (
    <div className='header'>
      <div className='row '>
        <div className='fotoperfil col-2'>
          <img src={imagen} alt="foto de perfil" style={{width: '100%'}}/>
        </div>
        <div className='col-10 titulo'>
          <h1 className='animate__animated animate__bounce'>
            Daiana Betsabe Selis
          </h1>
          

        </div>
      </div>
     <nav className='nav-links'>
      <ul className='botones'>
        <button onClick={() => manejarClick("presentacion")} className='btn1'> PRESENTACION </button>
       <button onClick={() => manejarClick("hobbies")}>MIS HOBBIES</button>
      </ul>
     </nav>
    </div>
  )
}

export default Header
