import React, {useEffect } from "react";
import "./App.css"
import { usePlayers } from "./player-hooks.js";
import StatCell from "./statsTableCell";

export default function Player() {
    const { players, addStatToPlayers } = usePlayers();

    return (
        <>
        {players.map((player, i) => 
            <tr key={i}>
                <td>{player.first} {player.last}</td>
                <td>{player.number}</td>
                <StatCell player={player} />
            </tr>
        )}
        </>
    );
}