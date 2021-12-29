import * as SessionApiUtil from '../util/session_api_util'
import * as UserApiUtil from '../util/user_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';

const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})

const logoutCurentUser = () => ({
    type: REMOVE_CURRENT_USER
})

export const login = () => (dispatch) => (
    SessionApiUtil.logIn()
    .then(user => dispatch(receiveCurrentUser(user)))
)

export const signup = (user) => (dispatch) => (
    UserApiUtil.signUp(user)
    .then(user => dispatch(receiveCurrentUser(user)))
)

export const logout = () => (dispatch) => (
    SessionApiUtil.logOut()
    .then(() => dispatch(logoutCurentUser()))
)