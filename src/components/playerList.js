import React from "react";
import Player from "./player"
import TableHeaders from "./tableHeaders";
import "./App.css"

export default function PlayerList () {
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