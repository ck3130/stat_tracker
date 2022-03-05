import React from "react";
import "./App.css";

export default function ErrorScreen({error}) {

    return (
        <div className="error">
            <h3>
                Error: Something went wrong :(
            </h3>
            <p>Details: {error.message}</p>
        </div>
    );
}