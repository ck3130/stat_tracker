import React from "react";
import { usePlayers } from "./player-hooks.js";
import "./App.css";

export default function TableHeaders() {
    const { stats } = usePlayers()
    const options = ["player", "#",...stats];
    return (
        <>
            {options.map((option, i) =>
            <th>
                {option}
            </th>
            )}
        </>
    );
}

