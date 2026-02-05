import { Input } from "./components/form/Input"

export const LogIn = () => {
  return (
    <>
        <div>
                <h1>Inicia Sesión</h1>
                
                <Input tipo="mail" nombreInput="Correo" texto="" ph="Introduce tu correo electrónico" />
                <Input tipo="password" nombreInput="Contraseña" texto="" ph="Introduce tu contraseña" />

                <button>Iniciar sesión</button>
                <a href="">¿Has olvidado tu contraseña?</a>
                
            </div>
    </>
  )
}
