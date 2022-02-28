import React from "react";
import Player from "./player"
import TableHeaders from "./tableHeaders";
import "./App.css"
import { usePlayers } from "./player-hooks.js";

export default function PlayerList () {
    const { players } = usePlayers();
    if (!players.length) return <p>No players entered. Enter player below.</p>
    return (
        <>
            <header>
                <h1><em>Player Stats</em></h1>
            </header>
            <table>
                <thead>
                    <tr>
                        <TableHeaders />
                    </tr>
                </thead>
                <tbody>
                    <Player />
                </tbody>
            </table>
        </>
    );
}