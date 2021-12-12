import React from 'react';
import ReactDOM from 'react-dom';

// Since we export const we need to destructure the component
import { Root } from './components/root'
// We could define a functional component for root here instead but this is better
// since we will have many moving components for this project

// Here we are adding and event listener for DOMContentLoaded which essentially
// the event that executes when the initial HTML document has been completely
// loaded. So since this is asynchronous, it loads the DOM first before executing
// this callback, which does the rendering. Stuff DOM loads includes stylesheets,
// images, subframes or html
document.addEventListener("DOMContentLoaded", () => {
    // This is creating a const variable for the element tag we grab with id
    // of root and use this in the ReactDOM.render as the container (which is just
    // the top level element which will 'contain' the rest of the elements we will
    // eventually manipulate through React). The ReactDOM.render takes the container
    // given and then update it only mutating the DOM as necessary to reflect the
    // React component. This will also replace the container element so that is
    // why we should put "React is Broken!" in the container, because if that is
    // shown on the browser, it means that React couldn't render and replace it.
    const root = document.getElementById("root");
    ReactDOM.render(<Root />, root)
})