import * as LikeApiUtil from '../util/like_api_util';

export const RECEIVE_ALL_LIKES = 'RECEIVE_ALL_LIKES';
export const REMOVE_LIKE = 'REMOVE_LIKE';
export const REMOVE_ALL_LIKES = 'REMOVE_ALL_LIKES';

const receiveAllLikes = (likes) => {
    return {
        type: RECEIVE_ALL_LIKES,
        likes
    }
}

const removeLike = (likeId) => {
    return {
        type: REMOVE_LIKE,
        likeId
    }
}

export const clearLikes = () => {
    return {
        type: REMOVE_ALL_LIKES
    }
}

export const indexLikes = (likeData) => (dispatch) => {
    return (
        LikeApiUtil.getAllLikes(likeData)
        .then(likes => dispatch(receiveAllLikes(likes)))
    )
}

export const createLike = (likeData) => (dispatch) => {
    return (
        LikeApiUtil.createLike(likeData)
        .then(likes => dispatch(receiveAllLikes(likes)))
    )
}

export const destroyLike = (likeId) => (dispatch) => {
    return (
        LikeApiUtil.deleteLike(likeId)
        .then(() => dispatch(removeLike(likeId)))
    )
}