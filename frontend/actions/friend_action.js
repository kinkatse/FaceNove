// import * as FriendApiUtil from '../util/friend_api_util';

export const RECEIVE_ALL_FRIENDS = 'RECEIVE_ALL_FRIENDS';
export const RECEIVE_FRIEND = 'RECEIVE_FRIEND';
export const RECEIVE_FRIEND_REQUESTS = 'RECEIVE_FRIEND_REQUESTS';
export const RECEIVE_FRIEND_REQUEST = 'RECEIVE_FRIEND_REQUEST'
export const REMOVE_FRIEND = 'REMOVE_FRIEND';
export const REMOVE_FRIEND_REQUEST = 'REMOVE_FRIEND_REQUEST';
export const REMOVE_ALL_FRIENDS = 'REMOVE_ALL_FRIENDS';

const receiveAllFriends = (friends) => {
    return {
        type: RECEIVE_ALL_FRIENDS,
        friends
    }
}

const receiveFriend = (friend) => {
    return {
        type: RECEIVE_FRIEND,
        friend
    }
}

const receiveFriendRequests = (requests) => {
    return {
        type: RECEIVE_FRIEND_REQUESTS,
        friends
    }
}

const addFriendRequest = (request) => {
    return {
        type: RECEIVE_FRIEND_REQUEST,
        request
    }
}

const removeFriend = (friend) => {
    return {
        type: REMOVE_FRIEND,
        friend
    }
}

const removeFriendRequest = (request) => {
    return {
        type: REMOVE_FRIEND_REQUEST,
        request
    }
}

const clearFriends = () => {
    return {
        type: REMOVE_ALL_FRIENDS
    }
}

export const indexFriends = (friendData) => (dispatch) => {
    // Needs :user_id
    return (
        FriendApiUtil.getAllFriends(friendData)
        .then(data => {
            dispatch(receiveAllFriends(data.friends))
        })
    )
}

export const createFriend = (friendData) => (dispatch) => {
    // Needs :user_id and :friend_id
    return (
        FriendApiUtil.createFriend(friendData)
        .then(data => {
            dispatch(receiveFriend(data.friend))
            if (data.request.is_accepted) {
                dispatch(removeFriendRequest(data.request))
            } else {
                dispatch(addFriendRequest(data.request))
            }
        })
    )
}

export const destroyFriend = (friend) => (dispatch) => {
    return (
        FriendApiUtil.deleteFriend(friend.id)
        .then(() => dispatch(removeFriend(friend)))
    )
}