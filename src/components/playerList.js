import React from "react";
import Player from "./player"
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
                        <th>
                            Player
                        </th>
                        <th>
                            #
                        </th>
                        <th>
                            Shots
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <Player />
                </tbody>
            </table>
        </>
    );
}