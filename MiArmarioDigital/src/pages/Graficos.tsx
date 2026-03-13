import HeaderBySession from '../components/HeaderBySession';
import { Footer } from '../components/footer';
import { LineChartElement } from '../components/LineChartElement';
import { useTranslation } from "react-i18next";
import { t } from 'i18next';

const usuariosRegistrados = [
  { name: t('stats.months.jan'), value: 10 },
  { name: t('stats.months.feb'), value: 20 },
  { name: t('stats.months.mar'), value: 125 },

];

const ConjuntosCreados = [
    {name: t('stats.months.jan'), value: 55},
    {name: t('stats.months.feb'), value: 220},
    {name: t('stats.months.mar'), value: 450}
];

export const Graficos = () => {
    const { t } = useTranslation();
    return (
        <>
            <HeaderBySession/>
            <div className="grid grid-cols-2 gap-6 m-1.5">
                <LineChartElement items={usuariosRegistrados} title={t('stats.users_registered')}/>
                <LineChartElement items={ConjuntosCreados} title={t('stats.outfits_created')}/>
            </div>
            <Footer/>
        </>
    )
}
