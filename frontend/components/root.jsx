import React from 'react';
import { Provider } from 'react-redux';

import App from './app';

console.log("React is Working!")

// Did with implicit return with ()
// Ghost tags are useful to have a divider that isn't shown
// on the browser when we inspect elements so all the elements
// are nested cleanly
export const Root = ({store}) => (
    <>
        {/* <Provider store={store}> */}
            <App />
        {/* </Provider> */}
    </>
)
// We use the Provider to wrap around the App which will pass the store
// for every component and then we call connect() when we need it for
// that specific component

// Can use {} for explicit return which calls return