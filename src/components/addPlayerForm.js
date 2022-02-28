import React from "react";
import "./App.css";
import { useInput } from "./hooks";
import { usePlayers } from "./player-hooks";

export default function AddPlayerForm(){
    const [firstNameProps, resetFirstName] = useInput("");
    const [lastNameProps, resetLastName] = useInput("");
    const [playerNumberProps, resetPlayerNumber] = useInput("");
    const { addPlayer } = usePlayers();

    const submit = event => {
        event.preventDefault();
        addPlayer(firstNameProps.value, lastNameProps.value, playerNumberProps.value);
        resetFirstName();
        resetLastName();
        resetPlayerNumber();
    }

    return(
        <form className='addPlayerForm' onSubmit={submit}>
            <label for="firstName">First Name</label>
            <input {...firstNameProps} type="text" id="firstName"/><br/>
            <label for="lastName">Last Name</label>
            <input {...lastNameProps} type="text" id="lastName"/><br/>
            <label for="playerNumber">Number</label>
            <input {...playerNumberProps} type="text" id="playerNumber"/>
            <button className="submitNewPlayer">Enter</button>
        </form>
    );
}
