import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@fontsource/sora"
import './index.css'
import App from './App.jsx'
import "./styles/pages/home.css";
import "./styles/admin/layout.css";
import "./styles/admin/sidebar.css";
import "./styles/admin/topbar.css";
import "./styles/admin/dashboard.css";
import "./styles/admin/hairstyle.css";
import "./styles/admin/modal.css";
import "./styles/admin/auth.css";
import "./styles/admin/settings.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
