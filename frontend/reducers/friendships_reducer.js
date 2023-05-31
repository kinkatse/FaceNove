import { RECEIVE_ALL_FRIENDS, RECEIVE_FRIEND, RECEIVE_FRIEND_REQUESTS, RECEIVE_FRIEND_REQUEST, REMOVE_FRIEND, REMOVE_FRIEND_REQUEST, REMOVE_ALL_FRIENDS } from "../actions/friend_actions";

const friendshipsReducer = (friendshipState = {friends: {}, requests: {}}, action) => {
    Object.freeze(friendshipState);
    let friends = Object.assign({}, friendshipState.friends)
    let requests = Object.assign({}, friendshipState.requests)
    let newState = { friends, requests }
    switch(action.type) {
        case RECEIVE_ALL_FRIENDS:
            return Object.assign({}, friendshipState, {friends: action.friends});
        case RECEIVE_FRIEND:
            // This doesn't update properly so for now, we dont update the page yet
            // const friendId = Object.values(action.friend)[0].id
            // newState.friends[friendId] = action.friend[friendId];
            // return newState;

            return newState;

            // return Object.assign({}, friendshipState, {friends: action.friend});
        case RECEIVE_FRIEND_REQUESTS:
            return Object.assign({}, friendshipState, {requests: action.requests});
        case RECEIVE_FRIEND_REQUEST:
            // This doesn't update properly so for now, we dont update the page yet
            // const requestId = Object.values(action.request)[0].id
            // newState.requests[requestId] = action.request[requestId];
            // return newState;

            return newState;


            // return Object.assign({}, friendshipState, {requests: action.request});
        case REMOVE_FRIEND:
            // let newState = Object.assign({}, friendshipState);
            debugger
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