import React, { useContext } from "react";
import "./App.css"
import { usePlayers } from "./player-hooks.js";

export default function StatCell({stat_state, number, stat}) {
    const { plusOne, minusOne } = usePlayers();
    return (
        <td>
            <button className="increment minus" onClick={() => minusOne(number, stat)}>-</button>
            {stat_state}
            <button className="increment plus" onClick={() => plusOne(number, stat)}>+</button>
        </td>
    );
}