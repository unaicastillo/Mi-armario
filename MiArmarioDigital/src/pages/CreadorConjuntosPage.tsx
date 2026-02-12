import React from 'react'
import Header from '../components/Header'
import { Button } from '../components/Button'
import { Footer } from '../components/footer'

export const CreadorConjuntos = () => {
  return (
    <div className="creador-page">
      <Header />

      <main className="creador-main">
        <section className="creador-hero">
          <div className="creador-hero-text">
            <h1>Creador de conjuntos</h1>
            <p>Vista visual de tus combinaciones guardadas.</p>
          </div>
          <div className="creador-hero-cta">
            <Button nombre="Nuevo conjunto" class="btn creador-cta" />
          </div>

          <div className="creador-grid">
            <article className="creador-card">
              <h2>Conjunto 1</h2>
              <p>Descripcion breve del look.</p>
            </article>

            <article className="creador-card">
              <h2>Conjunto 2</h2>
              <p>Descripcion breve del look.</p>
            </article>

            <article className="creador-card">
              <h2>Conjunto 3</h2>
              <p>Descripcion breve del look.</p>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
