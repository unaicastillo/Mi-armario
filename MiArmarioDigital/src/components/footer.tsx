import React from 'react';
import '../styles/Footer.css';
import { useTranslation } from "react-i18next"; 

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        <div className="footer-section">
          <h2 className="footer-logo">Mi-Armario</h2>
          <p className="footer-tagline">
            {t('footer.brand_description')}
          </p>
        </div>

        <div className="footer-section">
          <h3>{t('footer.help')}</h3>
          <ul className="footer-links">
            <li><a href="#">{t('footer.support')}</a></li>
            <li><a href="#">{t('footer.terms')}</a></li>
            <li><a href="#">{t('footer.privacy')}</a></li>
            <li><a href="#">{t('header.contact')}</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>{t('footer.follow')}</h3>
          <ul className="footer-links">
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Pinterest</a></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Mi-Armario Digital. {t('footer.rights')}</p>
      </div>
    </footer>
  );
};