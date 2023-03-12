import { RECEIVE_ALL_FRIENDS, RECEIVE_FRIEND, RECEIVE_FRIEND_REQUESTS, RECEIVE_FRIEND_REQUEST, REMOVE_FRIEND, REMOVE_FRIEND_REQUEST, REMOVE_ALL_FRIENDS } from "../actions/friend_actions";

const friendsReducer = (friendState = {friends: {}, requests: {}}, action) => {
    Object.freeze(friendState);
    let newState = Object.assign({}, friendState);
    switch(action.type) {
        case RECEIVE_ALL_FRIENDS:
            return Object.assign({}, friendState, {friends: action.friends});
        case RECEIVE_FRIEND:
            return Object.assign({}, friendState, {friends: action.friend});
        case RECEIVE_FRIEND_REQUESTS:
            return Object.assign({}, friendState, {requests: action.requests});
        case RECEIVE_FRIEND_REQUEST:
            return Object.assign({}, friendState, {requests: action.request});
        case REMOVE_FRIEND:
            // let newState = Object.assign({}, friendState);
            delete newState[action.friend.id];
            return newState;
        case REMOVE_FRIEND_REQUEST:
            // let newState = Object.assign({}, friendState);
            delete newState[action.request.id];
            return newState;
        case REMOVE_ALL_FRIENDS:
            return {}
        default:
            return friendState;
    }
}

export default friendsReducer;