import React, { createContext, useState, useContext } from "react";
import playerData from "/home/pi/code/shot_tracking_app/data/players.json";

const PlayerContext = createContext();
export const usePlayers = () => useContext(PlayerContext);

export default function PlayerProvider ({ children }) {
    const [players, setPlayers] = useState(playerData);

    const plusOne = (number, stat) => setPlayers(
        players.map(player => (player.number === number ? {...player, [stat]:player[stat]+1 } : player)));
    
    const minusOne = (number, stat) => setPlayers(
        players.map(player => (player.number === number ? {...player, [stat]:player[stat]-1} : player))
    );

    const addPlayer = (first, last, number) =>
    setPlayers([
        ...players,
        {
            first,
            last,
            number,
            shots:0,
            turnovers:0
        }
    ]);
    
    return(
        <PlayerContext.Provider value={{ players, setPlayers, plusOne, minusOne, addPlayer }}>
            { children }
        </PlayerContext.Provider> 
    );
};

