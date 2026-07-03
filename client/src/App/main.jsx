import { createRoot } from 'react-dom/client'
import '@/style/index.css'
import App from './App.jsx'
import React from 'react'
import { Provider } from 'react-redux'
import store from '@/redux/store.js'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
