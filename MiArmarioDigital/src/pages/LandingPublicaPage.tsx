import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { Input } from '../components/form/Input';
import bannerImage from '../assets/MiArmarioLogo.png';
import { Footer } from '../components/footer';
import { useTranslation } from "react-i18next";
import { Boton_tema } from '../components/Boton_tema';





const LandingPublica = () => {

    const { t } = useTranslation();

    // Estado para controlar cuándo se activan las animaciones
    const [isLoaded, setIsLoaded] = useState(false);

    // Activamos el estado justo después de que el componente se monte en el cliente
    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className="min-h-screen font-sans bg-gray-50 flex flex-col justify-between">

            {/* Contenedor Principal */}
            <div>
                <Header />
                <div className="relative h-[400px] md:h-[500px] flex flex-col justify-center items-center text-white px-4 overflow-hidden bg-[#181818]">

                    {/* Imagen de Fondo */}
                    <img
                        src={bannerImage}
                        alt="Fondo"
                        className={`absolute inset-0 w-full h-full object-contain opacity-30 blur-sm md:scale-75 transition-transform duration-[2000ms] ease-out ${isLoaded ? 'scale-125 md:scale-75' : 'scale-150 md:scale-100'
                            }`}
                    />

                    {/* Contenido sobre el banner */}
                    <div className="relative z-10 text-center max-w-3xl w-full mt-8">

                        {/* Título */}
                        <h1 className={`text-4xl md:text-6xl font-bold mb-6 drop-shadow-xl text-white transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'
                            }`}>
                            {t('landing.title1')} <br />
                            <span className="text-[#c026d3]">{t('landing.title2')}</span>
                        </h1>

                        {/* Párrafo */}
                        <p className={`text-lg md:text-xl mb-10 opacity-90 drop-shadow-md text-gray-200 px-2 transition-all duration-700 delay-300 ease-in-out ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                            }`}>
                            {t('landing.subtitle')}
                        </p>

                        {/* Barra blanca*/}
                        <div className={`bg-white rounded-full mx-auto shadow-2xl shadow-black/20 h-10 md:h-12 w-[90%] sm:max-w-lg md:max-w-xl transition-all duration-1000 delay-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                            }`}>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />

        </div>
    );
};

export default LandingPublica;