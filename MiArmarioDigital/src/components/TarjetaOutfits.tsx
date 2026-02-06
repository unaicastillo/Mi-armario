import React from 'react';

export const TarjetaOutfits = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-16">
      <h2 className="text-2xl font-bold text-[#181818] mb-8">
        Lo que has usado hace poco
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Outfit 1 */}
        <div className="h-[400px] bg-gray-200 rounded-lg shadow-md flex items-center justify-center">
          <span className="text-gray-400 font-medium">Outfit 1</span>
        </div>

        {/* Outfit 2 */}
        <div className="h-[400px] bg-gray-200 rounded-lg shadow-md flex items-center justify-center">
          <span className="text-gray-400 font-medium">Outfit 2</span>
        </div>

        {/* Outfit 3 */}
        <div className="h-[400px] bg-gray-200 rounded-lg shadow-md flex items-center justify-center">
          <span className="text-gray-400 font-medium">Outfit 3</span>
        </div>
      </div>
    </section>
  );
};