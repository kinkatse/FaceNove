export const TOGGLE_COLOR = 'TOGGLE_COLOR';
export const COLOR_ERROR = 'COLOR_ERROR';
// These are so that we get loud errors if we had a typo somewhere

// These are just action creators which take in some data from
// when it is dispatched and adds the type to its object to be
// returned as an action. Also is implicit return
// export const toggleColor = color => ({
//     type: TOGGLE_COLOR
// });

export const colorError = error => ({
    type: COLOR_ERROR,
    error
});

// Without implicit return
export const toggleColor = color => {
    // debugger
    return {
        type: TOGGLE_COLOR
    }
};