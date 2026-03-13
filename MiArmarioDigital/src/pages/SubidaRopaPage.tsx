import React from 'react';
import Header from '../components/Header';
import { Footer } from '../components/footer';
import { Input } from '../components/form/Input';
import { Button } from '../components/Button';
import { FileUploader } from '../components/FileUploader';

const PagSubidaRopa = () => {
  return (
    <div className="min-h-screen font-sans bg-gray-50 flex flex-col justify-between overflow-x-hidden w-full">
      
      {/* 1. HEADER */}
      <Header />

      {/* 2. CONTENIDO CENTRAL */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 md:px-6 py-8 md:py-12 box-border">
        
        <div className="mb-8 text-center md:text-left">
            <h1 className="text-3xl font-bold text-[#181818]">Sube tu prenda</h1>
            <p className="text-gray-500 mt-2">Añade una nueva pieza a tu armario digital.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-5 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start w-full box-border">
            
            {/* COLUMNA IZQUIERDA: FOTO */}
            <div className="w-full flex flex-col gap-2 min-w-0">
                <label className="block text-gray-700 font-medium mb-1">Foto de la prenda</label>
                <div className="w-full h-full min-h-[250px] md:min-h-[352px]">
                    <FileUploader />
                </div>
            </div>

            {/* COLUMNA DERECHA: DATOS */}
            <div className="flex flex-col gap-6 w-full min-w-0">
                
                <Input
                    texto=''
                    tipo='text'
                    nombreInput="Nombre de la prenda"
                    ph="Ej. Camiseta blanca básica"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                    <div className="w-full">
                        <label className="block text-gray-700 font-medium mb-2">Categoría</label>
                        <select className="input-field w-full text-gray-700 cursor-pointer appearance-none box-border">
                            <option value="" disabled selected>Selecciona...</option>
                            <option value="camisetas">Camisetas / Tops</option>
                            <option value="pantalones">Pantalones / Faldas</option>
                            <option value="vestidos">Vestidos / Monos</option>
                            <option value="zapatos">Zapatos</option>
                            <option value="accesorios">Accesorios</option>
                        </select>
                    </div>

                    <div className="w-full">
                        <label className="block text-gray-700 font-medium mb-2">Color</label>
                        <select className="input-field w-full text-gray-700 cursor-pointer appearance-none box-border">
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

                <div className="w-full">
                    <label className="block text-gray-700 font-medium mb-2">Notas (Opcional)</label>
                    <textarea 
                        className="input-field w-full h-24 md:h-32 py-3 resize-none box-border"
                        placeholder="¿Para qué ocasión es? ¿Marca?"
                    ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-4 pt-4 border-t border-gray-100 w-full">
                     <Button 
                        nombre="Cancelar" 
                        class="secondary"
                    />
                    <Button 
                        nombre="Guardar Prenda" 
                        class="primary"
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