import React from 'react';
import '../styles/Footer.css'; 

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* Sección Logo y Descripción (TEXTO AMPLIADO AQUÍ) */}
        <div className="footer-section">
          <h2 className="footer-logo">Mi-Armario</h2>
          <p className="footer-tagline">
            Tu compañero definitivo para la gestión de estilo personal. 
            Digitaliza tu guardarropa, planifica tus outfits diarios y 
            descubre nuevas combinaciones con la ropa que ya tienes. 
            Simplifica tus mañanas y eleva tu estilo.
          </p>
        </div>

        {/* Sección Ayuda */}
        <div className="footer-section">
          <h3>Ayuda</h3>
          <ul className="footer-links">
            <li><a href="#">Centro de soporte</a></li>
            <li><a href="#">Términos y condiciones</a></li>
            <li><a href="#">Política de privacidad</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>

        {/* Sección Síguenos */}
        <div className="footer-section">
          <h3>Síguenos</h3>
          <ul className="footer-links">
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Pinterest</a></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Mi-Armario Digital. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};