import React from 'react'
import Header from '../components/Header'
import { Button } from '../components/Button'
import { Footer } from '../components/footer'
import { useTranslation } from "react-i18next";

const prendaImagen = 'https://www.dcostal.com/2912-thickbox_default/camisa-lisa-oxford-marino.jpg'

export const CreadorConjuntos = () => {
  const { t } = useTranslation();
  return (
    <div className="creador-page">
      <Header />

      <main className="creador-main">
        <section className="creador-hero">
          <div className="creador-hero-text">
            <h1>{t('outfit_creator.title')}</h1>
            <p>{t('outfit_creator.subtitle')}</p>
          </div>
          <div className="creador-hero-cta">
            <Button nombre={t('outfit_creator.new')} class="btn creador-cta" />
          </div>

          <div className="creador-grid">
            <article className="creador-card">
              <img className="mostrar-card-image" src={prendaImagen} />
              <h2>{t('outfit_creator.outfit')} 1</h2>
              <p>{t('outfit_creator.description')}</p>
            </article>

            <article className="creador-card">
              <img className="mostrar-card-image" src={prendaImagen} />

              <h2>{t('outfit_creator.outfit')} 2</h2>
              <p>{t('outfit_creator.description')}</p>
            </article>

            <article className="creador-card">
              <img className="mostrar-card-image" src={prendaImagen} />

              <h2>{t('outfit_creator.outfit')} 3</h2>
              <p>{t('outfit_creator.description')}</p>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
