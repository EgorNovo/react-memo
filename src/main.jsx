import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Home } from './components/screens/home/Home'
import { Car } from './components/screens/car/Car'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthProvider from './providers/AuthProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/car/:id' element={<Car />} />
          <Route path='*' element={<div>Not found</div>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)
