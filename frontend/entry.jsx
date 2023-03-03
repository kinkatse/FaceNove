import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root'
import configureStore from './store/store.js'

import { indexLikes, createLike, destroyLike } from './actions/like_actions'

document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (!window.localStorage.getItem('appColor')) {
        window.localStorage.setItem('appColor', 'blue')
    }
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id },
            ui: {
                theme: { color: window.localStorage.getItem('appColor') }
            }
        }
        store = configureStore(preloadedState)
        delete window.currentUser
    } else {
        const preloadedState = {
            ui: {
                theme: { color: window.localStorage.getItem('appColor') }
            }
        }
        store = configureStore(preloadedState)
    }

    window.store = store
    window.indexLikes = indexLikes
    window.createLike = createLike
    window.destroyLike = destroyLike
    
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root)
})