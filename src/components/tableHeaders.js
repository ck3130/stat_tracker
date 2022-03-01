import React from "react";
import { usePlayers } from "./player-hooks.js";
import "./App.css";

export default function TableHeaders() {
    const { stats } = usePlayers()
    const statNames = stats.map(x => x["available"] ? x["stat"] : undefined).filter(x => x !== undefined)
    const options = ["player", "#",...statNames];
    return (
        <>
            {options.map((option, i) =>
            <th key={`header${i}`}>
                {option}
            </th>
            )}
        </>
    );
}

