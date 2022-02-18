import React, { useContext } from "react";
import "./App.css"
import { usePlayers } from "./player-hooks.js";

export default function StatCell({shots, number}) {
    const { plusOne, minusOne } = usePlayers();
    return (
        <td>
            <button className="increment minus" onClick={() => minusOne(number)}>-</button>
            {shots}
            <button className="increment plus" onClick={() => plusOne(number)}>+</button>
        </td>
    );
}