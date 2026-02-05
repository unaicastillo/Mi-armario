import React, { useState } from 'react'
import Sol from "../icons/sol.ico"
import Luna from "../icons/luna.ico"


export const Boton_tema = () => {

  const [estado, setEstado] = useState(Sol);

  const cambiarTema = () => {
    setEstado(estado === Sol ? Luna : Sol);
  };

  return (
    <>

      {/* 
        button{
          width: 36px;
          height: 36px;
          background-color: none;
          border: 2px solid;
          border-radius: 50%;
        }
        img{
          width: 24px;
          height: 24px;
          justify-self: center

        }
      */}
      <button className='w-[36px] h-[36px] bg-transparent border-2 rounded-full' onClick={cambiarTema}>
        <img src={estado} className='w-[24px] h-[24px] justify-self-center' />

      </button>
    </>
  )
}
