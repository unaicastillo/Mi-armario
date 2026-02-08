import React from 'react'
import { Input } from './Input'
import { Button } from '../Button'

export const Form = () => {
    return (
        <>
            <div className="form-style">
                <div className='header-form'>
                    <h1>Inicia Sesión</h1>
                </div>
                <div className="inputs-form">
                    <Input tipo="mail" nombreInput="Correo" texto="" ph="Introduce tu correo electrónico" />
                    <Input tipo="password" nombreInput="Contraseña" texto="" ph="Introduce tu contraseña" />

                    <Button nombre="Iniciar sesion" />
                </div>
                <a href="">¿Has olvidado tu contraseña?</a>
            </div>

        </>
    )
}
