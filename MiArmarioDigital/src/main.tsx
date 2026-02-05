import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Button } from './components/Button'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Button nombre={'boton'}></Button>
  </StrictMode>,
)
