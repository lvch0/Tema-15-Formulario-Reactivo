import React from 'react'

export const Datos = (props) => {

  const nombre = props.nombre
  const domicilio = props.domicilio


  return (
    <div className='datosStyle'>
        <h1>Componente Reactivo 🤞🏻</h1>
        {nombre}
        <br></br>
        {domicilio}
    </div>
  )
}


