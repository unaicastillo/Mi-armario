import Header from '../components/Header'
import { Footer } from '../components/footer'
import { Button } from '../components/Button'
import { Link } from 'react-router-dom'

const prendaImagen = 'https://www.dcostal.com/2912-thickbox_default/camisa-lisa-oxford-marino.jpg'

export const MostrarRopa = () => {
  return (
    <div className="mostrar-page">
      <Header />

      <main className="mostrar-main">
        <section className="mostrar-hero">
          <div className="mostrar-hero-text">
            <h1>Ropa guardada</h1>
            <p>Explora tus prendas almacenadas en el armario digital.</p>
          </div>
          <div className="mostrar-hero-cta">
            <Link to="/subir-ropa">
              <Button nombre="Subir prenda" class="btn mostrar-cta" />
            </Link>
          </div>

          <div className="mostrar-grid">
            <article className="mostrar-card">
              <img className="mostrar-card-image" src={prendaImagen}  />
              <h2>Prenda 1</h2>
              <p>Descripcion breve de la prenda.</p>
            </article>

            <article className="mostrar-card">
              <img className="mostrar-card-image" src={prendaImagen} />
              <h2>Prenda 2</h2>
              <p>Descripcion breve de la prenda.</p>
            </article>

            <article className="mostrar-card">
              <img className="mostrar-card-image" src={prendaImagen}  />
              <h2>Prenda 3</h2>
              <p>Descripcion breve de la prenda.</p>
            </article>

            <article className="mostrar-card">
              <img className="mostrar-card-image" src={prendaImagen} />
              <h2>Prenda 4</h2>
              <p>Descripcion breve de la prenda.</p>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
