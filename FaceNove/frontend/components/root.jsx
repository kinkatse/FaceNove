import React from 'react';

import Splash from './splash/splash';
// Need this even if we dont extend from React.Component

// Did with implicit return with ()
// Ghost tags are useful to have a divider that isn't shown
// on the browser when we inspect elements so all the elements
// are nested cleanly
export const Root = () => (
    <>
        <h1>React is Working!</h1>
        <Splash />
    </>
)

// This is explicit return with {}
// export const Root = () => {
//     return (
//         <div>
//             <h1>React is Working!</h1>
//         </div>
//     )
// }