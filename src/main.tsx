import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './main.css'

const root = document.getElementById('root') as HTMLElement
createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
)
