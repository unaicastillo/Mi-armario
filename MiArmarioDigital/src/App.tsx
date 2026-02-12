import React from 'react'
import { Boton_tema } from './components/Boton_tema'
import { Footer } from './components/footer'
import { Favoritos } from './pages/Favoritos'
import { Button } from './components/Button'

export const App = () => {
  return (
    <>
    <Favoritos></Favoritos>
    <Footer></Footer>
    <Button nombre={'Enviar'} class={'btn'}></Button>
    </>
  )
}
