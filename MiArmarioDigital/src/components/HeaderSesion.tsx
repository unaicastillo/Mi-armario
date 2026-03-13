import React, { useState } from 'react';
import logoImage from '../assets/MiArmarioLogo.png';
import { Button } from './Button';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

const HeaderSesion = () => {

    const img_perfil = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
    const nombre = "fsdjhgkasjhdgfakshgdfkasjhdgfadf";



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

      <nav className="header-nav">


        <div
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
        </div>

        <div
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
      </nav>

      <div className="header-login-buttons-section">

        <Link to="/perfil" className='header_user_box'>
            <button className='perfil_box'>
                <img className='img_perfil_header' src={img_perfil} />
                <h2>{nombre}</h2>
            </button>
        </Link>
      </div>
    </header>
  );
};

export default HeaderSesion;