import { createRoot } from 'react-dom/client'
import '@/style/index.css'
import App from './App.jsx'
import React from 'react'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
