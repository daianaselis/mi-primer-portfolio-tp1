import React from 'react'
import './main.css'
import { yo } from '../../constants/constants'
const Main = (props) => {

  const pagina = props.pagina
  const mipersona = yo;
  
  const dibujarPagina = (paginaADibujar) => {
    switch (paginaADibujar) {
      case "presentacion": return (
        
        <>Presentacion:
        
        <span className='texto'><p>Hola mi nombre es {mipersona.nombre} {mipersona.apellido} tengo {mipersona.edad} años, soy estudiante  de segundo anio de la carrera {mipersona.carrera} </p></span>
          
        </>
        
      );
      case "hobbies": return (
        <>
        <span className='texto'>
          <p>Mis hobbies son: </p>
        <ul>
          {
            mipersona.hobbies.map(hobby=>(
              <li>{hobby.nombre}: {hobby.descripcion}</li>
            ))
          }
        </ul>
        </span>
        </>
      ) ;
      default: return <></>;
    }
  }

  return (
    <div className='main'>
      <div className='container'>
        {
          dibujarPagina(pagina)
        }
      </div>

    </div>
  )
}

export default Main;
