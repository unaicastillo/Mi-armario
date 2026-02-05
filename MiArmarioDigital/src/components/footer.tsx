import './../styles/Footer.css';

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        
        <div className="footer-section">
          <h2 className="footer-logo">Mi-Armario</h2>
          <p className="footer-tagline">
            Organiza tu estilo, crea tendencias.
            Tu armario digital al alcance de un clic.
          </p>
        </div>

        <div className="footer-section">
          <h3>Ayuda</h3>
          <ul className="footer-links">
            <li><a href="#">Centro de soporte</a></li>
            <li><a href="#">Términos y condiciones</a></li>
            <li><a href="#">Política de privacidad</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Síguenos</h3>
          <div className="social-icons">
            <a href="#" className="social-link">Instagram</a>
            <a href="#" className="social-link">Twitter</a>
            <a href="#" className="social-link">Pinterest</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Mi-Armario Digital. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};