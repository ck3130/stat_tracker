import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { usePlayers } from "./player-hooks.js";
import React from "react";

export default function ShotGraph() {
    const { players } = usePlayers();
    return (
        <BarChart 
        width={600} 
        height={250} 
        data={players} 
        >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="number"/>
        <YAxis units="Shots"/>
        <Tooltip />
        <Legend />
        <Bar dataKey="shots" fill="goldenrod" />
        <Bar dataKey="turnovers" fill="orangered" />
        <Bar dataKey="hits" fill="darkorange" />
        </BarChart>
);
}
