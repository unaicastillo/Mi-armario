import { useState, useEffect } from 'react';
// Importamos TUS iconos
import Sol from "../icons/sol.ico";
import Luna from "../icons/luna.ico";

export const Boton_tema = () => {
  // 1. Estado inicial (Lógica del profesor)
  const [theme, setTheme] = useState(() => {
    // ¿Tiene algo guardado en localStorage?
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    // ¿El sistema tiene el modo oscuro por defecto?
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    return 'light'; // Por defecto
  });

  // 2. Efecto para actualizar el HTML y LocalStorage
  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  // 3. Función para alternar
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <button
      onClick={toggleTheme}
      // Clases de Tailwind para que quede como querías, con un efecto hover chulo
      className="flex items-center justify-center w-[36px] h-[36px] bg-transparent border-2 border-[#18181B] dark:border-white rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
      aria-label="Cambiar tema"
    >
      <img
        // Lógica visual: Si está oscuro, mostramos el Sol (para volver al claro). Si está claro, la Luna.
        src={theme === 'dark' ? Sol : Luna}
        alt="Icono del tema"
        className="w-[24px] h-[24px]"
      />
    </button>
  );
};