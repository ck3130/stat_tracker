import React from "react";
import PlayerList from "./playerList.js";
import AddPlayerForm from "./addPlayerForm";
import StatControlForm from "./statControlForm.js";
import "./App.css";
import ErrorBoundry from "./errorBoundry.js";

export default function App() {
    return (
        <div>
            <div>
                <ErrorBoundry>
                 <PlayerList />
                </ErrorBoundry>
            </div>
            <div>
                <ErrorBoundry>
                    <AddPlayerForm />
                </ErrorBoundry>
            </div>
            <div>
                <ErrorBoundry>
                    <StatControlForm />
                </ErrorBoundry>
            </div>
        </div>
    );
}