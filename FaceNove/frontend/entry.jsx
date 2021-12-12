import React from 'react';
import ReactDOM from 'react-dom';

// Since we export const we need to destructure the component
import { Root } from './components/root'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<Root/>, root)
})