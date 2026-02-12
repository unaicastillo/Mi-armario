import React from 'react'
import Header from '../components/Header'
import { Button } from '../components/Button'
import { Footer } from '../components/footer'

export const CreadorConjuntos = () => {
  return (
    <div>
      <Header />

      <main>
        <section>
          <h1>Creador de conjuntos</h1>
          <p>Vista visual de tus combinaciones guardadas.</p>
          <Button nombre="Nuevo conjunto" class="btn" />

          <div>
            <article>
              <h2>Conjunto 1</h2>
              <p>Descripcion breve del look.</p>
            </article>

            <article>
              <h2>Conjunto 2</h2>
              <p>Descripcion breve del look.</p>
            </article>

            <article>
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
