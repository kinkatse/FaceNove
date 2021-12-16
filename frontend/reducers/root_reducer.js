import { combineReducers } from 'redux';
// This allows us to combine many reducers into one for the createStore
// when we initialize it since it can only take one reducer as a parameter

// Import reducers for each slice of state
import entities from './entities_reducer';
import session from './session_reducer';
import errors from './errors_reducer';
import ui from './ui_reducer';

const rootReducer = combineReducers({
    // Example:
    // fruitReducer: fruitReducer
    // Although we can simplify this by just fruitReducer since it is the same key as value and
    // that is just syntactic sugar. Need our state to have multiple slices of state so we need
    // many different reducers that handle different parts of the app like sessions, ui, entities,
    // errors etc, so we shouldn't just do one reducer per functionality, that may become very tedious
    // entities,
    // session,
    // errors,
    ui
})

export default rootReducer;