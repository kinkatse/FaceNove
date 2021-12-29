import { RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER } from '../actions/session_actions'

// Want the default state to be a null user
const _nullUser = Object.freeze({
    id: null
})

const sessionReducer = (sessionState = _nullUser, action) => {
    Object.freeze(sessionState)
    switch(action.type) {
        // For login dispatch
        // We don't want to give whole user when we log in? Only Id?
        case RECEIVE_CURRENT_USER:
            console.log("Logged in!");
            return { id: action.currentUser.id }
        // For logout dispatch
        case REMOVE_CURRENT_USER:
            console.log("Logged out!");
            return _nullUser
        default:
            return sessionState;
    }
}

export default sessionReducer;