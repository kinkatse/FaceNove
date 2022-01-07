import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { GET_USER } from "../actions/user_actions";

const usersReducer = (usersState = {}, action) => {
    Object.freeze(usersState);
    switch(action.type) {
        // Do we have action for receive current user here for sign up dispatch?
        // For signup dispatch
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, usersState, { [action.currentUser.id]: action.currentUser })
        // For showUser dispatch
        case GET_USER:
            // debugger
            return Object.assign({}, usersState, { [action.user.id]: action.user })
        default:
            return usersState;
    }
}

export default usersReducer;