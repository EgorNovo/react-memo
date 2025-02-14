import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './components/screens/home/Home'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
