import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock.jsx'
// import Tab from './'
import App from './app.jsx'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<App />, root)

});