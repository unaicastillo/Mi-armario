import HeaderBySession from '../components/HeaderBySession';
import { Footer } from '../components/footer';
import { Input } from '../components/form/Input';
import { Button } from '../components/Button';
import { FileUploader } from '../components/FileUploader';
import { useTranslation } from "react-i18next";

const PagSubidaRopa = () => {

    const { t } = useTranslation();

  return (
    
    <div className="min-h-screen font-sans bg-gray-50 flex flex-col justify-between overflow-x-hidden w-full">
      
      {/* 1. HEADER */}
    <HeaderBySession />

      {/* 2. CONTENIDO CENTRAL */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 md:px-6 py-8 md:py-12 box-border">
        
        <div className="mb-8 text-center md:text-left">
            <h1 className="text-3xl font-bold text-[#181818]">{t('upload.title')}</h1>
            <p className="text-gray-500 mt-2">{t('upload.subtitle')}</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-5 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start w-full box-border">
            
            {/* COLUMNA IZQUIERDA: FOTO */}
            <div className="w-full flex flex-col gap-2 min-w-0">
                <label className="block text-gray-700 font-medium mb-1">{t('upload.photo')}</label>
                <div className="w-full h-full min-h-[250px] md:min-h-[352px]">
                    <FileUploader />
                </div>
            </div>

            {/* COLUMNA DERECHA: DATOS */}
            <div className="flex flex-col gap-6 w-full min-w-0">
                
                <Input
                    texto=''
                    tipo='text'
                    nombreInput={t('upload.name')}
                    ph={t('upload.name_placeholder')}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                    <div className="w-full">
                        <label className="block text-gray-700 font-medium mb-2">{t('upload.category')}</label>
                        <select className="input-field w-full text-gray-700 cursor-pointer appearance-none box-border">
                            <option value="" disabled selected>{t('upload.select')}</option>
                            <option value="camisetas">{t('upload.categories.tops')}</option>
                            <option value="pantalones">{t('upload.categories.bottoms')}</option>
                            <option value="vestidos">{t('upload.categories.dresses')}</option>
                            <option value="zapatos">{t('upload.categories.shoes')}</option>
                            <option value="accesorios">{t('upload.categories.accessories')}</option>
                        </select>
                    </div>

                    <div className="w-full">
                        <label className="block text-gray-700 font-medium mb-2">{t('upload.color')}</label>
                        <select className="input-field w-full text-gray-700 cursor-pointer appearance-none box-border">
                            <option value="" disabled selected>{t('upload.select_color')}</option>
                            <option value="negro">{t('upload.colors.black')}</option>
                            <option value="blanco">{t('upload.colors.white')}</option>
                            <option value="gris">{t('upload.colors.gray')}</option>
                            <option value="azul">{t('upload.colors.blue')}</option>
                            <option value="rojo">{t('upload.colors.red')}</option>
                            <option value="verde">{t('upload.colors.green')}</option>
                            <option value="varios">{t('upload.colors.multi')}</option>
                        </select>
                    </div>
                </div>

                <div className="w-full">
                    <label className="block text-gray-700 font-medium mb-2">{t('upload.notes')}</label>
                    <textarea 
                        className="input-field w-full h-24 md:h-32 py-3 resize-none box-border"
                        placeholder={t('upload.notes_placeholder')}
                    ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-4 pt-4 border-t border-gray-100 w-full">
                     <Button 
                        nombre={t('upload.cancel')} 
                        class="secondary"
                    />
                    <Button 
                        nombre={t('upload.save')} 
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