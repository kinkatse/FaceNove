import { RECEIVE_LOGIN_ERRORS, RECEIVE_SIGNUP_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions'

const sessionErrorsReducer = (errorState = [], action) => {
    debugger
    Object.freeze(errorState);
    switch(action.type) {
        case RECEIVE_LOGIN_ERRORS:
            return action.errors;
        case RECEIVE_SIGNUP_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return [];
        default:
            return errorState;
    }
}

export default sessionErrorsReducer;