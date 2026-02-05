import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Home } from './Home'
import { LogIn } from './LogIn'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LogIn/>
  </StrictMode>,
)
