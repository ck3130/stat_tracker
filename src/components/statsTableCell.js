import React from "react";
import "./App.css"
import { usePlayers } from "./player-hooks.js";

export default function StatCell({player}) {
    const { plusOne, minusOne, stats } = usePlayers();
    return (
        <>
        {stats.map((stat, i) => 
        <td key={`stat${i}`}>
            <button className="increment minus" onClick={() => minusOne(player.number, stat)}>-</button>
            {player[stat]}
            <button className="increment plus" onClick={() => plusOne(player.number, stat)}>+</button>
        </td>
        )}
        </>
    );
}