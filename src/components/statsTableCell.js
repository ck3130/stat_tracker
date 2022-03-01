import React from "react";
import "./App.css"
import { usePlayers } from "./player-hooks.js";

export default function StatCell({player}) {
    const { plusOne, minusOne, stats } = usePlayers();
    return (
        <>
        {stats.map((stat, i) => stat["available"] ? 
        <td key={`stat${i}`}>
            <button className="increment minus" onClick={() => minusOne(player.number, stat["stat"])}>-</button>
            {player[stat["stat"]]}
            <button className="increment plus" onClick={() => plusOne(player.number, stat["stat"])}>+</button>
        </td>
        :
        undefined
)}
        </>
    );
}