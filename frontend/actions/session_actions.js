import * as SessionApiUtil from '../util/session_api_util'
import * as UserApiUtil from '../util/user_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';
export const RECEIVE_LOGIN_ERRORS = 'RECEIVE_LOGIN_ERRORS';
export const RECEIVE_SIGNUP_ERRORS = 'RECEIVE_SIGNUP_ERRORS';

const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})

const logoutCurentUser = () => ({
    type: REMOVE_CURRENT_USER
})

const receiveLoginErrors = (errors) => {
    return {
    type: RECEIVE_LOGIN_ERRORS,
    errors
    }
}

const receiveSignupErrors = (errors) => {
    return {
    type: RECEIVE_SIGNUP_ERRORS,
    errors
    }
}

export const login = (user) => (dispatch) => {
    return (
        SessionApiUtil.logIn(user)
        .then(user => dispatch(receiveCurrentUser(user)),
        (err) => dispatch(receiveLoginErrors(err.responseJSON)))
    )
}

export const signup = (user) => (dispatch) => {
    debugger
    return (
        UserApiUtil.signUp(user)
        .then(user => dispatch(receiveCurrentUser(user)),
        (err)=>dispatch(receiveSignupErrors(err)))
    )
}

export const logout = () => (dispatch) => (
    SessionApiUtil.logOut()
    .then(() => dispatch(logoutCurentUser()))
)