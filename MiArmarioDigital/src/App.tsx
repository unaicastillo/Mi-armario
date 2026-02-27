import React from 'react'
import { Boton_tema } from './components/Boton_tema'
import { Footer } from './components/footer'
import { Favoritos } from './pages/Favoritos'
import { Button } from './components/Button'
import { CreadorConjuntos } from './pages/CreadorConjuntosPage'
import { MostrarRopa } from './pages/MostrarRopaPage'
import LandingPublicaPage from './pages/LandingPublicaPage'
import PagSubidaRopa from './pages/SubidaRopaPage'

export const App = () => {
  return (
    <>
    <PagSubidaRopa></PagSubidaRopa>
    {/* <Footer></Footer>
    <Button nombre={'Enviar'} class={'btn'}></Button> */}
    </>
  )
}
