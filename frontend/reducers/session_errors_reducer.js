import { RECEIVE_SESSION_ERRORS } from '../actions/session_actions'

const sessionErrorsReducer = (errorState = [], action) => {
    Object.freeze(errorState);
    switch(action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        default:
            return state;
    }
}

export default sessionErrorsReducer;