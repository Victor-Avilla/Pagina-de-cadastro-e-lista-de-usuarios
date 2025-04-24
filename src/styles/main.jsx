import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyles } from '../assets/GlobalStyles'
import Home from '../Home'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
    <GlobalStyles />
  </StrictMode>,
)
