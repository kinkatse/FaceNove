import { RECEIVE_ALL_FRIENDS, RECEIVE_FRIEND, RECEIVE_FRIEND_REQUESTS, RECEIVE_FRIEND_REQUEST, REMOVE_FRIEND, REMOVE_FRIEND_REQUEST, REMOVE_ALL_FRIENDS } from "../actions/friend_actions";

const friendshipsReducer = (friendshipState = {friends: {}, requests: {}}, action) => {
    Object.freeze(friendshipState);
    let newState = Object.assign({}, friendshipState);
    switch(action.type) {
        case RECEIVE_ALL_FRIENDS:
            return Object.assign({}, friendshipState, {friends: action.friends});
        case RECEIVE_FRIEND:
            debugger
            newState.friends[action.friend.id] = action.friend;
            return newState;
            // return Object.assign({}, friendshipState, {friends: action.friend});
        case RECEIVE_FRIEND_REQUESTS:
            return Object.assign({}, friendshipState, {requests: action.requests});
        case RECEIVE_FRIEND_REQUEST:
            debugger
            newState.requests[action.request.id] = action.request;
            return newState;
            // return Object.assign({}, friendshipState, {requests: action.request});
        case REMOVE_FRIEND:
            // let newState = Object.assign({}, friendshipState);
            delete newState.friends[action.friendId];
            return newState;
        case REMOVE_FRIEND_REQUEST:
            // let newState = Object.assign({}, friendshipState);
            delete newState.requests[action.request.id];
            return newState;
        case REMOVE_ALL_FRIENDS:
            return {friends: {}, requests: {}}
        default:
            return friendshipState;
    }
}

export default friendshipsReducer;