import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Boton_tema } from './components/Boton_tema'
import { Footer } from './components/footer'
import { Favoritos } from './pages/Favoritos'
import { Button } from './components/Button'
import { CreadorConjuntos } from './pages/CreadorConjuntosPage'
import { MostrarRopa } from './pages/MostrarRopaPage'
import { LogIn } from './pages/LogIn'
import { Register } from './pages/Register'
import LandingPublicaPage from './pages/LandingPublicaPage'
import LandingUsuarioIniciadoPage from './pages/LandingUsuarioIniciadoPage'
import { Perfil } from './pages/Perfil'
import SubidaRopaPage from './pages/SubidaRopaPage'
import { EdicionPerfil } from './EdicionPerfil'
import { Graficos } from './pages/Graficos'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPublicaPage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<LandingUsuarioIniciadoPage />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/editar-perfil" element={<EdicionPerfil />} />
        <Route path="/subir-ropa" element={<SubidaRopaPage />} />
        <Route path="/mostrar-ropa" element={<MostrarRopa />} />
        <Route path="/creador-conjuntos" element={<CreadorConjuntos />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path='/estadisticas' element={<Graficos/>}/>
      </Routes>
    </BrowserRouter>
  )
}
