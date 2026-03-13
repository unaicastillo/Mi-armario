import React from 'react';
import { useTranslation } from 'react-i18next';

export const TarjetaOutfits = () => {
  const { t } = useTranslation();
  return (
    <section className="max-w-7xl mx-auto px-8 py-16">
      <h2 className="text-2xl font-bold text-[#181818] mb-8">
        {t('outfits.recent')}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Outfit 1 */}
        <div className="h-[400px] bg-gray-200 rounded-lg shadow-md flex items-center justify-center">
          <span className="text-gray-400 font-medium">{t('outfits.outfit')} 1</span>
        </div>

        {/* Outfit 2 */}
        <div className="h-[400px] bg-gray-200 rounded-lg shadow-md flex items-center justify-center">
          <span className="text-gray-400 font-medium">{t('outfits.outfit')} 2</span>
        </div>

        {/* Outfit 3 */}
        <div className="h-[400px] bg-gray-200 rounded-lg shadow-md flex items-center justify-center">
          <span className="text-gray-400 font-medium">{t('outfits.outfit')} 3</span>
        </div>
      </div>
    </section>
  );
};