import {
    OPEN_SIGNUP_MODAL,
    OPEN_EDIT_MODAL,
    OPEN_PROFPIC_MODAL,
    OPEN_COVPIC_MODAL,
    OPEN_CREATEPOST_MODAL,
    OPEN_EDITPOST_MODAL,
    OPEN_LIKES_MODAL,
    CLOSE_MODAL,
    OPEN_PIC_MODAL
} from "../actions/modal_actions";

const modalucer = (state = {type: ''}, action) => {
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
        case OPEN_CREATEPOST_MODAL:
            return Object.assign({}, state, {type: 'createpost'})
        case OPEN_EDITPOST_MODAL:
            return Object.assign({}, state, {type: 'editpost', postId: action.postId})
        case OPEN_PIC_MODAL:
            return Object.assign({}, state, {type: 'pic', postId: action.postId})
        case OPEN_LIKES_MODAL:
            return Object.assign({}, state, {type: 'likes', postId: action.postId})
        case CLOSE_MODAL:
            return Object.assign({}, state, {type: ''})
        default:
            return state;
    }
}

export default modalucer;