import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import './globals.css'

import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastContainer
      draggable
      newestOnTop
      pauseOnHover
      closeOnClick
      pauseOnFocusLoss
      limit={4}
      autoClose={3000}
      theme="dark"
      position="bottom-right"
      transition={Slide}
    />
    <App />
  </StrictMode>,
)
