import React from 'react'
import Header from '../components/Header'
import { Footer } from '../components/footer'
import { Button } from '../components/Button'

export const MostrarRopa = () => {
  return (
    <div>
      <Header />

      <main>
        <section>
          <h1>Ropa guardada</h1>
          <p>Explora tus prendas almacenadas en el armario digital.</p>
          <Button nombre="Subir prenda" class="btn" />

          <div>
            <article>
              <h2>Prenda 1</h2>
              <p>Descripcion breve de la prenda.</p>
            </article>

            <article>
              <h2>Prenda 2</h2>
              <p>Descripcion breve de la prenda.</p>
            </article>

            <article>
              <h2>Prenda 3</h2>
              <p>Descripcion breve de la prenda.</p>
            </article>

            <article>
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
