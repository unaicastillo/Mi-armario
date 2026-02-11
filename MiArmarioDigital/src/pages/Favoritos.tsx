import Header from '../components/Header';
import { Footer } from '../components/footer';


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


  return (
    <div >
      <Header></Header>
      <div className="favoritos">
        <div className="contenedor_favoritos">
          {conjuntos.map((el, index) => (
            <div key={index} className="conjunto">
              {el.partes.map((img, i) => (
                <img src={img} key={i} />
              ))}
            <button className='eliminar_favorito'>Eliminar de favoritos</button>
            </div>
          ))}
        </div>
      </div>

      <Footer></Footer>
    </div>
  )
}

export default Favoritos;