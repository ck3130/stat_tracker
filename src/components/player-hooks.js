import React, { createContext, useState, useContext, useEffect, useMemo, useCallback } from "react";
import playerData from "../../data/players.json";
import statOptions from "../../data/statOptions.json";

const PlayerContext = createContext();
export const usePlayers = () => useContext(PlayerContext);

export default function PlayerProvider ({ children }) {
    const [players, setPlayers] = useState(playerData);
    const [stats, setStats] = useState(statOptions);

    const plusOne = (number, stat) => setPlayers(
        players.map(player => (player.number === number ? {...player, [stat]:player[stat]+1 } : player)));
    
    const minusOne = (number, stat) => setPlayers(
        players.map(player => (player.number === number ? {...player, [stat]:player[stat]-1} : player))
    );

    const addStatToPlayers = () => setPlayers(
        players.map(player => ({...player, ...statObjBuilder()}))
    )

    const statObjBuilder = () => {
        const statObj = {}
        for (let stat of stats) {
        statObj[stat] = 0
    } return statObj
};

    const addPlayer = (first, last, number) =>
    setPlayers([
        ...players,
        {
            first,
            last,
            number
        }
    ]);

    const playerList = useMemo(() => players.length, [players])

    useEffect(() => {
        addStatToPlayers();
    }, [playerList]);
    
    return(
        <PlayerContext.Provider value={{ players, setPlayers, stats, setStats, plusOne, minusOne, addPlayer, addStatToPlayers }}>
            { children }
        </PlayerContext.Provider> 
    );
};
