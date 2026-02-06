import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LogIn } from './LogIn'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='login'>
      <LogIn/>
    </div>
  </StrictMode>,
)
