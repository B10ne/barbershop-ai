import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
   const [theme, setTheme] = useState(() => {
      // Cek localStorage dulu, fallback ke system preference
      const saved = localStorage.getItem("hairvision-theme");
      if (saved === "dark" || saved === "light") return saved;
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
   });

   useEffect(() => {
      // Set data-theme di <html> tag agar CSS variables aktif
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("hairvision-theme", theme);
   }, [theme]);

   const toggleTheme = () =>
      setTheme((prev) => (prev === "dark" ? "light" : "dark"));

   return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
         {children}
      </ThemeContext.Provider>
   );
}

export function useTheme() {
   const ctx = useContext(ThemeContext);
   if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
   return ctx;
}