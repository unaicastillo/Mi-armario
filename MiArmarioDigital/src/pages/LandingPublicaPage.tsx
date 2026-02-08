import React from 'react';
import Header from '../components/Header'; 
import { Footer } from '../components/footer'; 
import { Input } from '../components/form/Input'; 
import bannerImage from '../assets/MiArmarioLogo.png';

const LandingPublica = () => {
  return (
    <div className="min-h-screen font-sans bg-gray-50 flex flex-col justify-between">
      
      {/* Contenedor Principal */}
      <div>
        <Header />
        <div className="relative h-[500px] flex flex-col justify-center items-center text-white px-4 overflow-hidden bg-[#181818]">
            
            {/* Imagen de Fondo */}
            <img 
                src={bannerImage} 
                alt="Fondo" 
                className="absolute inset-0 w-full h-full object-contain opacity-30 blur-sm scale-75"
            />

            {/* Contenido sobre el banner */}
            <div className="relative z-10 text-center max-w-3xl w-full mt-8">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-xl text-white">
                    Organiza tu estilo. <br/>
                    <span className="text-[#c026d3]">Encuentra tu look perfecto.</span>
                </h1>
                <p className="text-lg md:text-xl mb-10 opacity-90 drop-shadow-md text-gray-200">
                    Explora y busca nuevas prendas y crea combinaciones únicas.
                </p>

                {/* Buscador dentro de la barra blanca */}
                <div className="bg-white rounded-full flex items-center p-2 px-4 max-w-xl mx-auto shadow-2xl shadow-black/20 h-14">
                </div>
            </div>
        </div>
        
      </div>

      <Footer />
      
    </div>
  );
};

export default LandingPublica;