import React from 'react';
import logoImage from '../assets/MiArmarioLogo.png';
import { Button } from './Button';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white border-b border-gray-200 shadow-sm font-sans">
      
      {/* Sección Logo */}
      <div className="flex items-center">
        <a href="pages/LandingPublica" className="flex items-center">
          <img 
            src={logoImage} 
            alt="Mi Armario Logo" 
            className="h-[60px] w-auto block" 
          />
        </a>
      </div>

      {/* Sección Navegación */}
      <nav className="flex gap-12">
        <a 
          href="#contactanos" 
          className="text-[#181818] font-medium text-base hover:text-[#c026d3] transition-colors duration-200"
        >
          Contáctanos
        </a>
        <a 
          href="#conocenos" 
          className="text-[#181818] font-medium text-base hover:text-[#c026d3] transition-colors duration-200"
        >
          Conócenos
        </a>
      </nav>

      {/* Sección Botones */}
      <div className="flex gap-4 items-center">
        <Button 
            nombre="Iniciar Sesion" 
            className="w-[130px] h-[40px] bg-[#D4D4D8] text-[#181818] rounded-[5px] flex items-center justify-center cursor-pointer font-medium transition-transform active:scale-95 hover:brightness-95"
        />

        <Button 
            nombre="Registrarse" 
            className="w-[110px] h-[40px] bg-[#c026d3] text-white rounded-[5px] flex items-center justify-center cursor-pointer font-medium transition-transform active:scale-95 hover:opacity-90 shadow-md" 
        />
      </div>
    </header>
  );
};

export default Header;