import React, { useState } from 'react'
import empty_star from "../icons/empty_star.ico"
import full_star from "../icons/full_star.ico"

export const Button_favorito = () => {

  const [estado, setEstado] = useState(full_star);

  const cambiarFavorito = () => {
    setEstado(estado === full_star ? empty_star : full_star);
  };

  
  return (
    <button id='btn_favorito' onClick={cambiarFavorito}>
        <img src={estado} id='img_favorito' />
    </button>
  )
}
