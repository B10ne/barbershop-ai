import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "./ThemeProvider";
import HamburgerMenu from "./HamburgerMenu";
import "../../styles/layout/topbar.css";

export default function Topbar() {
   const [menuOpen, setMenuOpen] = useState(false);
   const { theme, toggleTheme } = useTheme();
   const navigate = useNavigate();
   const location = useLocation();

   const isHome = location.pathname === "/";

   return (
    <>
       <header className="hv-topbar">
 
          <button
             className="topbar__icon-btn"
             onClick={() => navigate(-1)}
             aria-label="Kembali"
             style={{ visibility: isHome ? "hidden" : "visible" }}
          >
             ←
          </button>
 
          <div className="topbar__brand">
             <span className="topbar__logo-icon">
                ✂
             </span>
 
             <span className="topbar__logo-text">
                HairVision AI
             </span>
          </div>
 
          <button
             className="topbar__icon-btn"
             onClick={() => setMenuOpen(!menuOpen)}
             aria-label="Menu"
          >
             ☰
          </button>
 
       </header>
 
       <HamburgerMenu
          isOpen={menuOpen}
          onClose={() => setMenuOpen(false)}
       />
    </>
 );
}