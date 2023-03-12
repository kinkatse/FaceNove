export const getAllFriends = (friendData) => {
    return $.ajax({
        url: '/api/friends',
        method: 'GET',
        data: { friendData }
    })
}

export const createFriend = (user_id) => {
    return $.ajax({
        url: '/api/friends',
        method: 'POST',
        data: { user_id }
    })
}

export const deleteFriend = (friendId) => {
    return $.ajax({
        url: `/api/friends/${friendId}`,
        method: 'DELETE'
    })
}

export const getAllFriendRequests = (user_id) => {
    return $.ajax({
        url: '/api/requests',
        method: 'GET',
        data: { user_id }
    })
}