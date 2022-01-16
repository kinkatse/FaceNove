import {
    OPEN_SIGNUP_MODAL,
    OPEN_EDIT_MODAL,
    OPEN_PROFPIC_MODAL,
    OPEN_COVPIC_MODAL,
    OPEN_EDITPOST_MODAL,
    CLOSE_MODAL
} from "../actions/modal_actions";

const modalReducer = (state = {type: ''}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case OPEN_SIGNUP_MODAL:
            return Object.assign({}, state, {type: 'signup'})
        case OPEN_EDIT_MODAL:
            return Object.assign({}, state, {type: 'edit'})
        case OPEN_PROFPIC_MODAL:
            return Object.assign({}, state, {type: 'profilepic'})
        case OPEN_COVPIC_MODAL:
            return Object.assign({}, state, {type: 'coverpic'})
        case OPEN_EDITPOST_MODAL:
            return Object.assign({}, state, {type: 'editpost'})
        case CLOSE_MODAL:
            return Object.assign({}, state, {type: ''})
        default:
            return state;
    }
}

export default modalReducer;