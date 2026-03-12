import React from 'react'
import { Input } from './Input'
import { Button } from '../Button'
import { Link } from 'react-router-dom'

export const Form = () => {
    return (
        <>
            <div className="form-style">
                <div className='header-form'>
                    <h1>Inicia Sesión</h1>
                </div>
                <div className="inputs-form">
                    <Input tipo="mail" nombreInput="Correo" texto="" ph="Introduce tu correo electrónico" onChange={} />
                    <Input tipo="password" nombreInput="Contraseña" texto="" ph="Introduce tu contraseña" onChange={}/>
                    <Link to="/home">
                        <Button nombre="Iniciar sesion" class="btn"/>
                    </Link>
                </div>
                <a href="">¿Has olvidado tu contraseña?</a>
            </div>

        </>
    )
}
