import React from 'react'
import { Boton_tema } from './components/Boton_tema'
import { Footer } from './components/footer'
import { Favoritos } from './pages/Favoritos'
import { Button } from './components/Button'
import { CreadorConjuntos } from './pages/CreadorConjuntosPage'

export const App = () => {
  return (
    <>
    <CreadorConjuntos></CreadorConjuntos>
    {/* <Favoritos></Favoritos>
    <Footer></Footer>
    <Button nombre={'Enviar'} class={'btn'}></Button> */}
    </>
  )
}
