import React, { useState } from 'react'

export const Formulario = () => {
    const [datos, setDatos] = useState({
        nombre: "",
        domicilio: ""
    })

    const handleInputChange = (event) => {
        //console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault();
        console.log(datos.nombre + " " + datos.domicilio)
    }

    return (
        <>
            <h1>Formulario</h1>
            <form className='row' onSubmit={enviarDatos}>
                <div className='col=md=3'>
                    <input
                        placeholder="Ingrese nombre"
                        className='form-control'
                        type="text"
                        name="nombre"
                        onChange={handleInputChange}
                    ></input>
                </div>
                <div className='col=md=3'>
                    <input
                        placeholder='Ingrese domicilio'
                        className='form-control'
                        type="text"
                        name="domicilio"
                        onChange={handleInputChange}
                    ></input>
                </div>
                <div className='col=md=3'>
                    <button className='btn btn-primary' type='submit'>Enviar</button>
                </div>
            </form>
            <h3>{datos.nombre} - {datos.domicilio}</h3>
        </>
    )
}



