import { combineReducers } from 'redux';
// This allows us to combine many reducers into one
// for the createStore when we initialize it since
// it can only take one reducer as a parameter

// Then we would import from any reducer after

const rootReducer = combineReducers({
    // Example:
    // fruitReducer: fruitReducer
    // Although we can simplify this by just
    // fruitReducer since it is the same key
    // as value and that is just syntactic sugar
})

export default rootReducer;