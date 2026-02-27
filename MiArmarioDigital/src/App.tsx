import React from 'react'
import { Boton_tema } from './components/Boton_tema'
import { Footer } from './components/footer'
import { Favoritos } from './pages/Favoritos'
import { Button } from './components/Button'
import { CreadorConjuntos } from './pages/CreadorConjuntosPage'
import { MostrarRopa } from './pages/MostrarRopaPage'
import { LogIn } from './pages/LogIn'
import { Register } from './pages/Register'

export const App = () => {
  return (
    <>
    <div className='login'>
          <Register/>
    </div>
    {/* <div className="login">
    <LogIn></LogIn>
    </div> */}
    {/* <Favoritos></Favoritos> */}
    {/* <Footer></Footer>
    <Button nombre={'Enviar'} class={'btn'}></Button> */}
    </>
  )
}
