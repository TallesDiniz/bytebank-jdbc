import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          background: '#1f2937',
          color: '#fff',
          border: '1px solid #374151',
          borderRadius: '12px',
        },
        success: {
          iconTheme: {
            primary: '#00c853',
            secondary: '#fff'
          },
        },
        error: {
          iconTheme: {
            primary: '#ef4444',
            secondary: '#fff',
          },
        },
      }}
      />
    <App />
  </StrictMode>,
)
