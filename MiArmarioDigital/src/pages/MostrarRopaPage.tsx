import HeaderBySession from '../components/HeaderBySession'
import { Footer } from '../components/footer'
import { Button } from '../components/Button'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";

const prendaImagen = 'https://www.dcostal.com/2912-thickbox_default/camisa-lisa-oxford-marino.jpg'

export const MostrarRopa = () => {
  const { t } = useTranslation();
  return (
    <div className="mostrar-page">
      <HeaderBySession />

      <main className="mostrar-main">
        <section className="mostrar-hero">
          <div className="mostrar-hero-text">
            <h1>{t('wardrobe.title')}</h1>
            <p>{t('wardrobe.subtitle')}</p>
          </div>
          <div className="mostrar-hero-cta">
            <Link to="/subir-ropa">
              <Button nombre={t('wardrobe.upload')} class="btn mostrar-cta" />
            </Link>
          </div>

          <div className="mostrar-grid">
            <article className="mostrar-card">
              <img className="mostrar-card-image" src={prendaImagen} />
              <h2>{t('wardrobe.garment')} 1</h2>
              <p>{t('wardrobe.description')}</p>
            </article>

            <article className="mostrar-card">
              <img className="mostrar-card-image" src={prendaImagen} />
              <h2>{t('wardrobe.garment')} 2</h2>
              <p>{t('wardrobe.description')}</p>
            </article>

            <article className="mostrar-card">
              <img className="mostrar-card-image" src={prendaImagen} />
              <h2>{t('wardrobe.garment')} 3</h2>
              <p>{t('wardrobe.description')}</p>
            </article>

            <article className="mostrar-card">
              <img className="mostrar-card-image" src={prendaImagen} />
              <h2>{t('wardrobe.garment')} 4</h2>
              <p>{t('wardrobe.description')}</p>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
