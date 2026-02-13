import { useState } from "react";
import { Button } from "./components/Button";
import { Input } from "./components/form/Input";


export const EdicionPerfil = () => {
  const img_perfil = "src/images/foto_perfil.webp";
  const icono_edicion = "src/icons/edicion.ico";
  const nombre = "Alberto";
  const correo = "alberto@gmail.com"

  const [img, setImgSrc] = useState(img_perfil);

  const subirImagen = () => {
    /* Pedir al usuario que suba una imagen */
  }
  const editarPerfil = () => {
    /* Editar perfil  */
  }


  const handleMouseEnter = () => setImgSrc(icono_edicion);
  const handleMouseLeave = () => setImgSrc(img_perfil);

  return (
    <div className="profile_box">
      <div id="shadow_box"></div>

      <div className="user_box">
        
        <button className="btn_imagen"  onMouseEnter={handleMouseEnter} 
              onMouseLeave={handleMouseLeave}
              onClick={subirImagen}>
          <img className="img_perfil" src={img}     />
        </button>
  
        <Input nombreInput="nombre" texto="" ph="Escribe tu nombre..." tipo="text" key={nombre} ></Input>
        <Input nombreInput="correo" texto="" ph="Escribe tu correo..." tipo="text" key={correo} ></Input>
        <Button nombre="Confirmar cambios" onClick={editarPerfil} class="btn_editar"></Button>

      </div>




    </div>
  )
}
