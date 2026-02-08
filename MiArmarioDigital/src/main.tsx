import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LogIn } from './LogIn'
import { Register } from './Register'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='login'>
      <Register/>
    </div>
  </StrictMode>,
)