import React from 'react';
import ReactDOM from 'react-dom';

import { Root } from './components/root'
import configureStore from './store/store.js'
import { logIn, logOut, signUp } from './util/session_api_util';

document.addEventListener("DOMContentLoaded", () => {
    let store = configureStore();
    window.store = store;
    window.logIn = logIn;
    window.logOut = logOut;
    window.signUp = signUp;
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root)
})