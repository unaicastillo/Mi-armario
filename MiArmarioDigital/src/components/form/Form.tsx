import React from 'react'
import { Input } from './Input'
import { Button } from '../Button'
import { Link } from 'react-router-dom'

export const Form = () => {
    return (
        <>
            <div className="form-style">
                <div className='header-form'>
                    <h1 className="text-2xl sm:text-3xl">Inicia Sesión</h1>
                </div>
                <div className="inputs-form">
                    <Input tipo="mail" nombreInput="Correo" texto="" ph="Introduce tu correo electrónico" />
                    <Input tipo="password" nombreInput="Contraseña" texto="" ph="Introduce tu contraseña" />
                    <Link to="/home" className="w-full">
                        <Button nombre="Iniciar sesion" class="header-btn-login w-full"/>
                    </Link>
                </div>
                <a href="" className="text-sm sm:text-base hover:underline">¿Has olvidado tu contraseña?</a>
            </div>

        </>
    )
}
