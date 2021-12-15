export const RECEIVE_COLOR = 'RECEIVE_COLOR';
export const COLOR_ERROR = 'COLOR_ERROR';
// These are so that we get loud errors if we had a typo somewhere

// These are just action creators which take in some data from
// when it is dispatched and adds the type to its object to be
// returned as an action. Also is implicit return
export const receiveColor = color => ({
    type: RECEIVE_COLOR,
    color
});

export const colorError = error => ({
    type: RECEIVE_COLOR,
    error
});

// Without implicit return
// export const receiveColor = color => {
//     return {
//         type: RECEIVE_COLOR,
//         color
//     }
// };