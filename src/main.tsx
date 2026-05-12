import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Initialize theme before React renders
const initializeTheme = () => {
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('trevon-theme') as 'light' | 'dark' | null;
  
  let theme: 'light' | 'dark' = 'light';
  
  if (savedTheme) {
    theme = savedTheme;
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    theme = 'dark';
  }
  
  root.classList.add(theme);
  localStorage.setItem('trevon-theme', theme);
};

initializeTheme();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
