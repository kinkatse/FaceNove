import { RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER } from '../actions/session_actions'

// Want the default state to be a null user
const _nullUser = Object.freeze({
    id: null
})

const sessionReducer = (sessionState = _nullUser, action) => {
    Object.freeze(sessionState)
    switch(action.type) {
        // For login dispatch
        // This is to replace the state and only want the id given here
        // Because then we can pass the id elsewhere and grab all it's data
        // since its data is all stored in the entities.users
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