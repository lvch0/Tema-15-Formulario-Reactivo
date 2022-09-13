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
            <div className='border p-5 rounded'>
                <h1 className='title-form'>Formulario</h1>
                <form className='row'>
                    <div className='col-md-3'>
                        <input
                            placeholder="Ingrese nombre"
                            className='form-control'
                            type="text"
                            name="nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        ></input>
                    </div>
                    <div className='col-md-3'>
                        <input
                            placeholder='Ingrese domicilio'
                            className='form-control'
                            type="text"
                            name="domicilio"
                            value={domicilio}
                            onChange={(e) => setDomicilio(e.target.value)}
                        ></input>
                    </div>
                    <div className='col-md-3'>
                        <button className='btn btn-primary' type='submit'>Enviar</button>
                    </div>
                </form>
            </div>
            <Datos nombre={nombre} domicilio={domicilio}>

            </Datos>

        </>
    )
}



