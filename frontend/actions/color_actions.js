export const TOGGLE_COLOR = 'TOGGLE_COLOR';
// These are so that we get loud errors if we had a typo somewhere

// These are just action creators which take in some data from when it is dispatched and
// adds the type to its object to be returned as an action. Also is implicit return
// export const toggleColor = color => ({
//     type: TOGGLE_COLOR
// });

// Without implicit return
export const toggleColor = () => {
    return {
        type: TOGGLE_COLOR
    }
};