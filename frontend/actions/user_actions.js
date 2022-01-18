import * as UsersApiUtil from '../util/user_api_util';

export const ALL_USERS = 'ALL_USERS';
export const GET_USER = 'GET_USER';

// All this is doing is giving the additional 'type' to the POJO (which we expect to come back from AJAX request) and make it an action
const allUsers = (users) => ({
    type: ALL_USERS,
    users
})

const getUser = (user) => ({
    type: GET_USER,
    user
})

// This is a thunk action creator which is a function that when dispatched, will call the AJAX request to get all the users which has a promise that
// once we grab all the users, we will then make it an action with the above action creators and then pass that into the store through dispatch once again, this time its not a function so it make it to the reducer
export const indexUsers = () => (dispatch) => (
    UsersApiUtil.getAllUsers()
    .then(users => dispatch(allUsers(users)))
)

export const showUser = (userId) => (dispatch) => {
    return (
        UsersApiUtil.getUser(userId)
        .then(user => dispatch(getUser(user)))
    )
}

export const updateUser = (user, userId) => (dispatch) => {
    return (
        UsersApiUtil.editUser(user, userId)
        .then(user => dispatch(getUser(user)))
    )
}

// updateProfilePic
export const updateProfPic = (user, userId) => (dispatch) => {
    return (
        UsersApiUtil.changeProfPic(user, userId)
        .then(user => dispatch(getUser(user)))
    )
}

// updateCoverPic
export const updateCovPic = (user, userId) => (dispatch) => {
    return (
        UsersApiUtil.changeCovPic(user, userId)
        .then(user => dispatch(getUser(user)))
    )
}