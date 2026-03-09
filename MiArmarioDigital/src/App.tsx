import React from 'react'
import { Boton_tema } from './components/Boton_tema'
import { Footer } from './components/footer'
import { Favoritos } from './pages/Favoritos'
import { Button } from './components/Button'
import { Register } from './Register'
import Perfil from './pages/Perfil'
import { LogIn } from './LogIn'

export const App = () => {
  return (
    <>
    {/* <Register></Register> */}
    {/* <Perfil></Perfil> */}
    {/* <LogIn></LogIn> */}
    <Favoritos></Favoritos>
    {/* <Footer></Footer>
    <Button nombre={'Enviar'} class={'btn'}></Button> */}
    </>
  )
}
