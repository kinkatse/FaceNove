import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root'
import configureStore from './store/store.js'

document.addEventListener("DOMContentLoaded", () => {
    let store;
    // default color
    // if (!window.localStorage.appColor) {
    //     window.localStorage.setItem('appColor', 'blue')
    // }

    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id },
            ui: {
                colorRed: { color: window.localStorage.getItem('appColor') }
            }
        }
        store = configureStore(preloadedState)
        delete window.currentUser
    } else {
        // const preloadedState = {
        //     ui: {
        //         colorRed: { color: window.localStorage.getItem('appColor') }
        //     }
        // }
        // store = configureStore(preloadedState)
        store = configureStore()
    }
    
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root)
})