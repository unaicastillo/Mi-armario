import React from 'react'
import Header from '../components/Header'
import { Footer } from '../components/footer'
import { Button } from '../components/Button'

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
            <Button nombre="Subir prenda" class="btn mostrar-cta" />
          </div>

          <div className="mostrar-grid">
            <article className="mostrar-card">
              <h2>Prenda 1</h2>
              <p>Descripcion breve de la prenda.</p>
            </article>

            <article className="mostrar-card">
              <h2>Prenda 2</h2>
              <p>Descripcion breve de la prenda.</p>
            </article>

            <article className="mostrar-card">
              <h2>Prenda 3</h2>
              <p>Descripcion breve de la prenda.</p>
            </article>

            <article className="mostrar-card">
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
