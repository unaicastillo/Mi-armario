import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Header from '../components/Header';
import { Footer } from '../components/footer';
import { LineChartElement } from '../components/LineChartElement';

const usuariosRegistrados = [
  { name: 'Ene', value: 10 },
  { name: 'Feb', value: 20 },
  { name: 'Mar', value: 125 },

];

const ConjuntosCreados = [
    {name: 'Ene', value: 55},
    {name: 'Feb', value: 220},
    {name: 'Mar', value: 450}
];

export const Graficos = () => {
    return (
        <>
            <Header/>
            <div className="grid grid-cols-2 gap-6 m-1.5">
                <LineChartElement items={usuariosRegistrados} title={'Usuarios registrados en la App'}/>
                <LineChartElement items={ConjuntosCreados} title={'Conjuntos creados por los usuarios'}/>
            </div>
            <Footer/>
        </>
    )
}
