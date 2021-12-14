import { createStore } from 'redux'
// Import createStore function from redux which will
// allow us to initialize the store with a reducer.
// Later we will add the middleware as another import
// from the 'redux' library. We would also need thunk
// and logger

// Here we import the rootReducer and pass this in as
// the first argument for createStore. Make sure we
// get the path right because it has a nested folder
import rootReducer from './reducers/root_reducer'

// This is creating a const variable with a preloadedState
// which is something we may need from a previous state
// and use that as the state parameter that createStore takes
// but if there is no preloadedState, then it defaults to {}
// For our purposes, the preloadedState will help us determine
// if the current user is still logged in and so even when we
// refresh the page, we should still keep the state
const configureStore = (preloadedState = {}) => (
    createStore(rootReducer, preloadedState)
)

export default configureStore;