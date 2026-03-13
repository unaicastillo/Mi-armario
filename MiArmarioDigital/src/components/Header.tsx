import React, { useState } from 'react';
import logoImage from '../assets/MiArmarioLogo.png';
import { Button } from './Button';
import '../styles/Header.css';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import i18n from '../i18n';

const Header = () => {
  const { t } = useTranslation();


  const [showRopa, setShowRopa] = useState(false);
  const [showOtros, setShowOtros] = useState(false);

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

      {/* <nav className="header-nav"> */}

        {/* Dropdown Ropa */}
        {/* <div
          className="dropdown"
          onMouseEnter={() => setShowRopa(true)}
          onMouseLeave={() => setShowRopa(false)}
        >
          <button className="dropdown-button">Ropa ▼</button>
          {showRopa && (
            <div className="dropdown-content">
              <Link to="/subir-ropa">Subir ropa</Link>
              <Link to="/mostrar-ropa">Mostrar ropa</Link>
              <Link to="/creador-conjuntos">Creador de conjuntos</Link>
              <Link to="/favoritos">Favoritos</Link>
            </div>
          )}
        </div> */}

        {/* Dropdown Otros */}
        {/* <div
          className="dropdown"
          onMouseEnter={() => setShowOtros(true)}
          onMouseLeave={() => setShowOtros(false)}
        >
          <button className="dropdown-button">Otros ▼</button>
          {showOtros && (
            <div className="dropdown-content">
              <Link to="/home">Home</Link>
              <Link to="/estadisticas">Estadísticas</Link>
            </div>
          )}
        </div>
      </nav> */}


      <div className="header-buttons-section">

        <Link to="/login">
          <Button
            nombre={t('header.login')}
            class="header-btn-login"
          />
        </Link>

        <Link to="/register">
          <Button
            nombre={t('header.register')}
            class="header-btn-register"
          />
        </Link>

        <button onClick={() => i18n.changeLanguage('en')}>
          EN
        </button>

        <button onClick={() => i18n.changeLanguage('es')}>
          ES
        </button>
      </div>
    </header>
  );
};

export default Header;