import { OPEN_SIGNUP_MODAL, CLOSE_MODAL } from "../actions/modal_actions";

const modalReducer = (state = {type: ''}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case OPEN_SIGNUP_MODAL:
            return Object.assign({}, state, {type: 'signup'})
        case CLOSE_MODAL:
            return Object.assign({}, state, {type: ''})
        default:
            return state;
    }
}

export default modalReducer;