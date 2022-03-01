import React from "react";
import StatControlInput from "./statControlInputs";
import { usePlayers } from "./player-hooks.js";

export default function StatControlForm(){
    const { stats } = usePlayers()
    return (
        <form className='statControlForm'>
            {stats.map((stat, i) => 
                <StatControlInput key={`statcontrol${i}`} {...stat} />
                )}
        </form>
    );
}