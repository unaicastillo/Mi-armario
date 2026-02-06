import React from 'react';
import Header from '../components/Header';
import { Footer } from '../components/footer'; 
import { Input } from '../components/form/Input';
import { Button } from '../components/Button';
import { FileUploader } from '../components/FileUploader';

const PagSubidaRopa = () => {
  return (
    <div className="min-h-screen font-sans bg-gray-50 flex flex-col justify-between">
      
      {/* 1. HEADER */}
      <Header />

      {/* 2. CONTENIDO CENTRAL */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-6 py-12">
        
        <div className="mb-8 text-center md:text-left">
            <h1 className="text-3xl font-bold text-[#181818]">Sube tu prenda</h1>
            <p className="text-gray-500 mt-2">Añade una nueva pieza a tu armario digital.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            
            {/* COLUMNA IZQUIERDA: FOTO */}
            <div className="w-full flex flex-col gap-2">
                <label className="block text-gray-700 font-medium mb-1">Foto de la prenda</label>
                <div className="w-full h-full min-h-[352px]">
                    <FileUploader />
                </div>
            </div>

            {/* COLUMNA DERECHA: DATOS */}
            <div className="flex flex-col gap-6">
                
                <Input 
                    label="Nombre de la prenda"
                    placeholder="Ej. Camiseta blanca básica" 
                />

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Categoría</label>
                        <select className="input-field text-gray-700 cursor-pointer appearance-none">
                            <option value="" disabled selected>Selecciona...</option>
                            <option value="camisetas">Camisetas / Tops</option>
                            <option value="pantalones">Pantalones / Faldas</option>
                            <option value="vestidos">Vestidos / Monos</option>
                            <option value="zapatos">Zapatos</option>
                            <option value="accesorios">Accesorios</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Color</label>
                        <select className="input-field text-gray-700 cursor-pointer appearance-none">
                            <option value="" disabled selected>Elige color...</option>
                            <option value="negro">Negro</option>
                            <option value="blanco">Blanco</option>
                            <option value="gris">Gris</option>
                            <option value="azul">Azul</option>
                            <option value="rojo">Rojo</option>
                            <option value="verde">Verde</option>
                            <option value="varios">Varios / Multicolor</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-2">Notas (Opcional)</label>
                    <textarea 
                        className="input-field h-32 py-3 resize-none"
                        placeholder="¿Para qué ocasión es? ¿Marca?"
                    ></textarea>
                </div>

                <div className="flex gap-4 mt-4 pt-4 border-t border-gray-100">
                     <Button 
                        nombre="Cancelar" 
                        variant="secondary"
                    />
                    <Button 
                        nombre="Guardar Prenda" 
                        variant="primary"
                    />
                </div>

            </div>
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default PagSubidaRopa;