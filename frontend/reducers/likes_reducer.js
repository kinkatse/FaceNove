import { RECEIVE_ALL_LIKES, REMOVE_LIKE, REMOVE_ALL_LIKES } from "../actions/like_actions";

const likesReducer = (likeState = {}, action) => {
    Object.freeze(likeState);
    switch(action.type) {
        case RECEIVE_ALL_LIKES:
            return Object.assign({}, likeState, action.likes);
        case REMOVE_LIKE:
            let newState = Object.assign({}, likeState);
            delete newState[action.likeId];
            return newState;
        case REMOVE_ALL_LIKES:
            return {}
        default:
            return likeState;
    }
}

export default likesReducer;