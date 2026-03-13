import React from 'react';
import { TarjetaOutfits } from '../components/TarjetaOutfits';
import bannerImage from '../assets/MiArmarioLogo.png';
import Header from '../components/Header';
import { Footer } from '../components/footer';
import { useTranslation } from "react-i18next";

const LandingUsuarioIniciado = () => {
    const { t } = useTranslation();
  return (
    <div>
        {/* --- CABECERA --- */}
        <Header/>
        
        {/* --- BANNER PRINCIPAL --- */}
        <div className="relative h-[400px] md:h-[500px] flex flex-col justify-center items-center text-white px-4 overflow-hidden bg-[#181818]">
            
            {/* Imagen de Fondo Difuminada */}
            <img 
                src={bannerImage} 
                alt="Fondo" 
                className="absolute inset-0 w-full h-full object-contain opacity-30 blur-sm scale-125 md:scale-75"
            />

            {/* Contenedor de Texto y Elemento Central */}
            <div className="relative z-10 text-center max-w-3xl w-full mt-8">
                
                {/* Título Principal */}
                <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-xl text-white">
                   {t('landing.title1')} <br/>
                    <span className="text-[#c026d3]">{t('landing.title2')}</span>
                </h1>
                
                {/* Subtítulo / Párrafo */}
                <p className="text-lg md:text-xl mb-10 opacity-90 drop-shadow-md text-gray-200 px-2">
                    {t('landing.subtitle')}
                </p>

                {/* Elemento Decorativo (Simulación de Buscador) */}
                <div className="bg-white rounded-full mx-auto shadow-2xl shadow-black/20 h-10 md:h-12 w-[90%] sm:max-w-lg md:max-w-xl">
                </div>
            </div>
        </div>

        {/* --- SECCIÓN CONTENIDO (TARJETAS) --- */}
        <TarjetaOutfits/>
        
        {/* --- PIE DE PÁGINA --- */}
        <Footer/>
    </div>
  );
};

export default LandingUsuarioIniciado;