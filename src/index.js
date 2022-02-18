import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./components/app.js";
import PlayerProvider from "./components/player-hooks.js"

ReactDOM.render(
    <PlayerProvider>
        <App />
    </PlayerProvider>, 
    document.getElementById("root")
);