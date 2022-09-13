import React, { useState } from 'react'
import { Datos } from './Datos'

export const Formulario = () => {

    const [nombre, setNombre] = useState("")
    const [domicilio, setDomicilio] = useState("")

    // const handleInputChange = (event) => {
    //     //console.log(event.target.value)
    //     setDatos({
    //         ...datos,
    //         [event.target.name] : event.target.value
    //     })
    // }

    // const enviarDatos = (event) => {
    //     event.preventDefault();
    //     console.log(datos.nombre + " " + datos.domicilio)
    // }

    return (
        <>
            <h1>Formulario</h1>
            <form className='row'>
                <div className='col=md=3'>
                    <input
                        placeholder="Ingrese nombre"
                        className='form-control'
                        type="text"
                        name="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    ></input>
                </div>
                <div className='col=md=3'>
                    <input
                        placeholder='Ingrese domicilio'
                        className='form-control'
                        type="text"
                        name="domicilio"
                        value={domicilio}
                        onChange={(e) => setDomicilio(e.target.value)}
                    ></input>
                </div>
                <div className='col=md=3'>
                    <button className='btn btn-primary' type='submit'>Enviar</button>
                </div>   
                
            </form>

            <Datos nombre={nombre} domicilio={domicilio}>

            </Datos>
            
        </>
    )
}



