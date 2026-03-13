import React from 'react';
import logoImage from '../assets/MiArmarioLogo.png';
import { Button } from './Button';
import '../styles/Header.css';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import i18n from '../i18n';

const Header = () => {
  const { t } = useTranslation();
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
          {t('header.contact')}
        </a>
        <a href="#conocenos" className="header-nav-link">
          {t('header.about')}
        </a>
        <Link to='/estadisticas'>
          <Button
            nombre={t('header.stats')}
            class="header-nav-link"
          />

        </Link>
      </nav>

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