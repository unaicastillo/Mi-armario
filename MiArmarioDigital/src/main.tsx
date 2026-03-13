import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LogIn } from './pages/LogIn'
import { App } from './App'
import './index.css'
import { Register } from './pages/Register'



createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    <App></App>
  </StrictMode>,
)