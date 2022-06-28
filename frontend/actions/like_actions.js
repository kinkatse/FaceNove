import * as LikeApiUtil from '../util/like_api_util';

export const RECEIVE_ALL_LIKES = 'RECEIVE_ALL_LIKES';
export const REMOVE_LIKE = 'REMOVE_LIKE';
export const REMOVE_ALL_LIKES = 'REMOVE_ALL_LIKES';

export const receiveAllLikes = (likes) => {
    return {
        type: RECEIVE_ALL_LIKES,
        likes
    }
}

// This is removing the like in both the post.likeIds array and the like state
// so it shows up in both post reducer and like reducer
const removeLike = (like) => {
    return {
        type: REMOVE_LIKE,
        like
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
    // debugger
    return (
        LikeApiUtil.createLike(likeData)
        .then(likes => dispatch(receiveAllLikes(likes)))
    )
}

export const destroyLike = (like) => (dispatch) => {
    // debugger
    return (
        LikeApiUtil.deleteLike(like.id)
        .then(() => dispatch(removeLike(like)))
    )
}