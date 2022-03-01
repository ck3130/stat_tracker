import React from "react";
import { usePlayers } from "./player-hooks.js";


export default function StatControlInput({stat, available}) {
    const { toggleStats } = usePlayers()
    return (
        <>
            <div className="statSwitch">
                <label className="switchLabel">{stat}</label>
                <label className="switch" htmlFor={stat}>
                <input type="checkbox" id={stat} onChange={() => toggleStats(stat)} defaultChecked={available}/>
                <span className="slider"></span>
                </label>
            </div>
        </>
    );
}