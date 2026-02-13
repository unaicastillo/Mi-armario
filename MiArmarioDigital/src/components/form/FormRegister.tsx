import { Button } from "../Button"
import { Input } from "./Input"


export const FormRegister = () => {
    return (
        <>
            <div className="form-style">
                <div className='header-form'>
                    <h1>Registro</h1>
                </div>
                <div className="inputs-form">
                    <Input tipo="text" nombreInput="Usuario" texto="" ph="Introduce tu Usuario" />

                    <Input tipo="mail" nombreInput="Correo" texto="" ph="Introduce tu correo electrónico" />

                    <Input tipo="password" nombreInput="Contraseña" texto="" ph="Introduce tu contraseña" />
                    
                    <Input tipo="password" nombreInput="Contraseña" texto="" ph="Repite la contraseña" />

                    <Button nombre="Registrarse" class={""} />
                </div>
            </div>

        </>
    )
}
