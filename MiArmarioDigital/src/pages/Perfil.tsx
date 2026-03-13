import { Link } from "react-router";
import { Button } from "../components/Button";
import HeaderSesion from "../components/HeaderSesion";
import { Footer } from "../components/footer";

export const Perfil = () => {

  const img = "src/images/foto_perfil.webp";
  const nombre = "Alberto";
  const correo = "alberto@gmail.com"



  return (
    <>
    <HeaderSesion></HeaderSesion>
    <div className="profile_box">
      
      <div id="shadow_box"></div>

      <div className="user_box">

        <img className="img_perfil"  src={img}  />
        <h2>{nombre}</h2>
        <h2>{correo}</h2>
        <Link to="/editar-perfil">
            <Button  nombre="Editar perfil" class="btn"></Button>
        </Link>
        <Link to="/">
            <Button nombre="Cerrar sesion" class="btn"></Button>
        </Link>
      </div>

    </div>
    <Footer></Footer>
    </>
  )
}

export default Perfil;