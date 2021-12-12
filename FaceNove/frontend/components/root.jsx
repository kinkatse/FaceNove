import React from 'react';
// Need this even if we dont extend from React.Component

// Did with implicit return with ()
export const Root = () => (
    <div>
        <h1>React is Working!</h1>
    </div>
)

// This is explicit return with {}
// export const Root = () => {
//     return (
//         <div>
//             <h1>React is Working!</h1>
//         </div>
//     )
// }