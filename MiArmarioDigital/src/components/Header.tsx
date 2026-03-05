import React from 'react';
import logoImage from '../assets/MiArmarioLogo.png';
import { Button } from './Button';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (

    <header className="header-container sm:justify-between">
      <div className="header-logo-section">
        <Link to="/" className="header-logo-link">
          <img 
            src={logoImage} 
            alt="Mi Armario Logo" 
            className="header-logo-img" 
          />
        </Link>
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

          <Link to="/login">
            <Button 
                nombre="Iniciar Sesion" 
                class="header-btn-login"
            />
          </Link>

        <Link to="/register">
          <Button 
              nombre="Registrarse" 
              class="header-btn-register" 
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;