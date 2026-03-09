import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LogIn } from './LogIn'
import { Register } from './Register'
import { App } from './App'
import './index.css'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <div className='login'>
      <Register></Register>
    </div> */}
    <App></App>
  </StrictMode>,
)