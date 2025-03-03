import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from "react-helmet-async";
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from "./assets/components/ThemeContext.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ThemeProvider>
     <HelmetProvider>
      <App />
    </HelmetProvider>
    </ThemeProvider>
  </StrictMode>,
)
