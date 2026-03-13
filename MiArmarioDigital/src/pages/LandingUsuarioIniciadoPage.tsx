import React, { useState, useEffect } from 'react';
import { TarjetaOutfits } from '../components/TarjetaOutfits';
import bannerImage from '../assets/MiArmarioLogo.png';
import Header from '../components/Header';
import { Footer } from '../components/footer';
import { useTranslation } from "react-i18next";
import HeaderSesion from '../components/HeaderSesion';

const LandingUsuarioIniciado = () => {
    const { t } = useTranslation();
    // Estado para disparar las animaciones al montar el componente
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div>
            {/* --- CABECERA --- */}
            <Header />

            {/* --- BANNER PRINCIPAL --- */}
            <div className="relative h-[400px] md:h-[500px] flex flex-col justify-center items-center text-white px-4 overflow-hidden bg-[#181818]">

                {/* Imagen de Fondo Difuminada - Efecto de zoom in suave */}
                <img
                    src={bannerImage}
                    alt="Fondo"
                    className={`absolute inset-0 w-full h-full object-contain opacity-30 blur-sm transition-transform duration-[2000ms] ease-out ${isLoaded ? 'scale-125 md:scale-75' : 'scale-150 md:scale-100'
                        }`}
                />

                {/* Contenedor de Texto y Elemento Central */}
                <div className="relative z-10 text-center max-w-3xl w-full mt-8">

                    {/* Título Principal - Aparece bajando suavemente */}
                    <h1 className={`text-4xl md:text-6xl font-bold mb-6 drop-shadow-xl text-white transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'
                        }`}>
                        {t('landing.title1')} <br />
                        <span className="text-[#c026d3]">{t('landing.title2')}</span>
                    </h1>

                    {/* Subtítulo / Párrafo - Aparece con retraso y ligero zoom */}
                    <p className={`text-lg md:text-xl mb-10 opacity-90 drop-shadow-md text-gray-200 px-2 transition-all duration-700 delay-300 ease-in-out ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                        }`}>
                        {t('landing.subtitle')}
                    </p>

                    {/* Elemento Decorativo (Simulación de Buscador) - Sube con rebote elástico */}
                    <div className={`bg-white rounded-full mx-auto shadow-2xl shadow-black/20 h-10 md:h-12 w-[90%] sm:max-w-lg md:max-w-xl transition-all duration-1000 delay-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                        }`}>
                    </div>
                </div>
            </div>

            {/* --- SECCIÓN CONTENIDO (TARJETAS) --- */}
            <TarjetaOutfits />

            {/* --- PIE DE PÁGINA --- */}
            <Footer />
        </div>
    );
};

export default LandingUsuarioIniciado;