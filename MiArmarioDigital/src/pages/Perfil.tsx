import { Button } from "../components/Button";

export const Perfil = () => {

  const img = "src/images/foto_perfil.webp";
  const nombre = "Alberto";
  const correo = "alberto@gmail.com"


  const editarPerfil = () => {
    /* Redirigir a la página de edición de Perfil */
  }


  return (
    <div className="profile_box">
      <div id="shadow_box"></div>

      <div className="user_box">

        <img className="img_perfil"  src={img}  />
        <h2>{nombre}</h2>
        <h2>{correo}</h2>
        <Button  nombre="Editar perfil" onClick={editarPerfil} class="btn_editar"></Button>

      </div>

    </div>
  )
}

export default Perfil;