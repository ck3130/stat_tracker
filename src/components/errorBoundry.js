import React, { Component } from "react";
import ErrorScreen from "./errorOptions.js";

export default class ErrorBoundry extends Component {
    state = { error: null };
    static getDerivedStateFromError(error) {
        return { error };
    }
    render() {
        const { error } = this.state;

        if ( error) return <ErrorScreen error={error}/>;
        return this.props.children;
    }
}