import { useState } from 'react';
import { Button } from '../components/Button';
import Header from '../components/Header';
import { Footer } from '../components/footer';
import { Button_favorito } from '../components/Button_favorito';

  /* Conjuntos tiene un uso meramente visual, para mostrar un gran número de conjuntos */
const conjuntos = [
  {
    partes: [
      "https://tommyperu.vtexassets.com/arquivos/ids/596117-800-auto?v=638320357271670000&width=800&height=auto&aspect=true",
      "https://www.dcostal.com/2912-thickbox_default/camisa-lisa-oxford-marino.jpg",
      "https://media.istockphoto.com/id/173239968/es/foto/fino-herm%C3%A9tico-jeans-azul-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=owv-YVYZRxIGPAvwkFWc3p5GgFgC8kAssFc1NeWxv0c=",
      "https://cdn.laredoute.com/cdn-cgi/image/width=500,height=500,fit=pad,dpr=1/products/9/8/a/98a4d5b9189363ee8fa6a8976c0c446e.jpg",
    ],
  },
  {
    partes: [
      "https://tommyperu.vtexassets.com/arquivos/ids/596117-800-auto?v=638320357271670000&width=800&height=auto&aspect=true",
      "https://www.dcostal.com/2912-thickbox_default/camisa-lisa-oxford-marino.jpg",
      "https://media.istockphoto.com/id/173239968/es/foto/fino-herm%C3%A9tico-jeans-azul-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=owv-YVYZRxIGPAvwkFWc3p5GgFgC8kAssFc1NeWxv0c=",
      "https://cdn.laredoute.com/cdn-cgi/image/width=500,height=500,fit=pad,dpr=1/products/9/8/a/98a4d5b9189363ee8fa6a8976c0c446e.jpg",
    ],
  },
  {
    partes: [
      "https://tommyperu.vtexassets.com/arquivos/ids/596117-800-auto?v=638320357271670000&width=800&height=auto&aspect=true",
      "https://www.dcostal.com/2912-thickbox_default/camisa-lisa-oxford-marino.jpg",
      "https://media.istockphoto.com/id/173239968/es/foto/fino-herm%C3%A9tico-jeans-azul-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=owv-YVYZRxIGPAvwkFWc3p5GgFgC8kAssFc1NeWxv0c=",
      "https://cdn.laredoute.com/cdn-cgi/image/width=500,height=500,fit=pad,dpr=1/products/9/8/a/98a4d5b9189363ee8fa6a8976c0c446e.jpg",
    ],
  },
  {
    partes: [
      "https://tommyperu.vtexassets.com/arquivos/ids/596117-800-auto?v=638320357271670000&width=800&height=auto&aspect=true",
      "https://www.dcostal.com/2912-thickbox_default/camisa-lisa-oxford-marino.jpg",
      "https://media.istockphoto.com/id/173239968/es/foto/fino-herm%C3%A9tico-jeans-azul-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=owv-YVYZRxIGPAvwkFWc3p5GgFgC8kAssFc1NeWxv0c=",
      "https://cdn.laredoute.com/cdn-cgi/image/width=500,height=500,fit=pad,dpr=1/products/9/8/a/98a4d5b9189363ee8fa6a8976c0c446e.jpg",
    ],
  },
  {
    partes: [
      "https://tommyperu.vtexassets.com/arquivos/ids/596117-800-auto?v=638320357271670000&width=800&height=auto&aspect=true",
      "https://www.dcostal.com/2912-thickbox_default/camisa-lisa-oxford-marino.jpg",
      "https://media.istockphoto.com/id/173239968/es/foto/fino-herm%C3%A9tico-jeans-azul-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=owv-YVYZRxIGPAvwkFWc3p5GgFgC8kAssFc1NeWxv0c=",
      "https://cdn.laredoute.com/cdn-cgi/image/width=500,height=500,fit=pad,dpr=1/products/9/8/a/98a4d5b9189363ee8fa6a8976c0c446e.jpg",
    ],
  },
  {
    partes: [
      "https://tommyperu.vtexassets.com/arquivos/ids/596117-800-auto?v=638320357271670000&width=800&height=auto&aspect=true",
      "https://www.dcostal.com/2912-thickbox_default/camisa-lisa-oxford-marino.jpg",
      "https://media.istockphoto.com/id/173239968/es/foto/fino-herm%C3%A9tico-jeans-azul-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=owv-YVYZRxIGPAvwkFWc3p5GgFgC8kAssFc1NeWxv0c=",
      "https://cdn.laredoute.com/cdn-cgi/image/width=500,height=500,fit=pad,dpr=1/products/9/8/a/98a4d5b9189363ee8fa6a8976c0c446e.jpg",
    ],
    
  },

];




export const Favoritos = () => {

  const [estado, setEstado] = useState();

  // const cambiarFavorito = (index: number) => {

  //   let cambio = conjuntos[index].favorito === full_star ? empty_star : full_star
  //   conjuntos[index].favorito = cambio;
    
  //   // location.reload()
  //   console.log(conjuntos[index].favorito);
    
  // }

  // const [conjuntosState, setConjuntosState] = useState(conjuntos);

  // const cambiarFavorito = (index: number) => {
  //   const nuevosConjuntos = [...conjuntosState];

  //   nuevosConjuntos[index] = {...nuevosConjuntos[index],
  //     favorito: nuevosConjuntos[index].favorito === full_star ? empty_star : full_star,
  //   };

  //   setConjuntosState(nuevosConjuntos);
  // }
  return (
    <div >
      <Header></Header>
      <div className="favoritos">
        <div className="contenedor_favoritos">
          {conjuntos.map((el, index) => (
            <div key={index} className="conjunto">
              <div className='contenedor_acciones'>
                <Button_favorito></Button_favorito>
              </div>

              <div className='contenedor_conjunto'>
                {el.partes.map((img, i) => (
                  <img src={img} key={i} />
                ))}
              </div>
              {/* <div className='contenedor_acciones'>
                <Button class='eliminar_favorito' nombre='Eliminar de favoritos'></Button>
              </div> */}
            </div>
          ))}
        </div>
      </div>

      <Footer></Footer>
    </div>
  )
}

export default Favoritos;