import React from 'react';
import { Provider } from 'react-redux';

import App from './app';

console.log("React is Working!")

export const Root = ({store}) => (
    <Provider store={store}>
        <App />
    </Provider>
)