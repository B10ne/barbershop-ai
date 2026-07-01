import { useEffect } from "react";
import { NavLink } from "react-router-dom";

import {
    Home,
    Camera,
    Sparkles,
    Scissors,
    MessageCircle,
    Info,
    ChevronRight
} from "lucide-react";

import "../../styles/layout/hamburger.css";

const primaryNav = [
    {
       icon: Home,
       label: "Home",
       to: "/"
    },
    {
       icon: Camera,
       label: "Scan Face",
       to: "/scan"
    },
    {
       icon: Sparkles,
       label: "Recommendation",
       to: "/recommendation"
    },
    {
       icon: Scissors,
       label: "AI Try-On",
       to: "/try-on"
    },
    {
       icon: MessageCircle,
       label: "Consultation",
       to: "/consultation"
    }
 ];
 
 const secondaryNav = [
    {
       icon: Info,
       label: "About",
       to: "/about"
    }
 ];
export default function HamburgerMenu({ isOpen, onClose }) {
   /* ESC key close */
   useEffect(() => {
      if (!isOpen) return;
      const onKey = (e) => e.key === "Escape" && onClose();
      document.addEventListener("keydown", onKey);
      return () => document.removeEventListener("keydown", onKey);
   }, [isOpen, onClose]);

   /* Body scroll lock */
   useEffect(() => {
      document.body.style.overflow = isOpen ? "hidden" : "";
      return () => { document.body.style.overflow = ""; };
   }, [isOpen]);

   return (
      <>
         {/* Overlay */}
         <div
            className={`hm-overlay${isOpen ? " hm-overlay--visible" : ""}`}
            onClick={onClose}
            aria-hidden="true"
         />

         {/* Drawer */}
         <aside
            className={`hm-drawer${isOpen ? " hm-drawer--open" : ""}`}
            aria-label="Menu navigasi"
         >
            {/* Brand */}
            <div className="hm-header">

<div className="hm-brand">

    <div className="hm-brand-icon">

        <Scissors size={20}/>

    </div>

    <div>

        <p className="hm-brand-name">

            HairVision AI

        </p>

        <p className="hm-brand-tagline">

            Smart Hairstyle Recommendation

        </p>

    </div>

</div>

</div>
            <div className="hm-divider" />

            {/* Primary nav */}
            {primaryNav.map(({ icon: Icon, label, to }) => (

<NavLink
    key={to}
    to={to}
    end={to === "/"}
    className={({ isActive }) =>
        `hm-nav-item${isActive ? " hm-nav-item--active" : ""}`
    }
    onClick={onClose}
>

    <Icon
        size={18}
        className="hm-nav-icon"
    />

    <span className="hm-nav-label">

        {label}

    </span>

    <ChevronRight
        size={16}
        className="hm-nav-arrow"
    />

</NavLink>

))}

            <div className="hm-divider" />

            <div className="hm-divider" />

            {/* Secondary nav */}
            {secondaryNav.map(({ icon: Icon, label, to }) => (

<NavLink
    key={to}
    to={to}
    className={({ isActive }) =>
        `hm-nav-item${isActive ? " hm-nav-item--active" : ""}`
    }
    onClick={onClose}
>

    <Icon
        size={18}
        className="hm-nav-icon"
    />

    <span className="hm-nav-label">

        {label}

    </span>

    <ChevronRight
        size={16}
        className="hm-nav-arrow"
    />

</NavLink>

))}

            <div className="hm-divider" />

            {/* Footer */}
            <div className="hm-footer">

                <div className="hm-footer-logo">

                    HairVision AI

                </div>

                <p className="hm-version">

                    Version 1.0

                </p>

                <p className="hm-powered">

                    Powered by Artificial Intelligence

                </p>

                </div>
         </aside>
      </>
   );
}