import React from 'react';
import logoImage from '../assets/MiArmarioLogo.png';
import { Button } from './Button';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-logo-section">
        <a href="pages/LandingPublica" className="header-logo-link">
          <img 
            src={logoImage} 
            alt="Mi Armario Logo" 
            className="header-logo-img" 
          />
        </a>
      </div>

      <nav className="header-nav">
        <a href="#contactanos" className="header-nav-link">
          Contáctanos
        </a>
        <a href="#conocenos" className="header-nav-link">
          Conócenos
        </a>
      </nav>

      <div className="header-buttons-section">
        <Button 
            nombre="Iniciar Sesion" 
            className="header-btn-login"
        />
        <Button 
            nombre="Registrarse" 
            className="header-btn-register" 
        />
      </div>
    </header>
  );
};

export default Header;