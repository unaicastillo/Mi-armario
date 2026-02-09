import React from 'react'
import { Boton_tema } from './components/Boton_tema'
import { Footer } from './components/Footer'
import { Button } from './components/Button'
import './index.css'

export const App = () => {
  return (
    <>
    <Boton_tema></Boton_tema>
    <Footer></Footer>
    <Button nombre={'Enviar'} class={'btn'}></Button>
    </>
  )
}
