import { createRoot } from 'react-dom/client';
import '@/style/index.css';
import App from './App.jsx';
import React from 'react';
import { Provider } from 'react-redux';
import store from '@/redux/store.js';
import { Toaster } from 'sonner';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            zIndex: 999999,
          },
        }}
      />
    </Provider>
  </React.StrictMode>
);
