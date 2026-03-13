import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface LineChartElementProps{
    items: Item[]
    title: string
}

interface Item{
    name: string
    value: string | number
}

export const LineChartElement = ({items, title}: LineChartElementProps) => {
    return (
        <>
            <div className="p-4 bg-white rounded-xl shadow-md">
              <h2 className="text-lg font-semibold mb-2">{title}</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={items}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#bf26d4" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>

        </>
    )
}
