import * as PostApiUtil from '../util/post_api_util'

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const REMOVE_ALL_POSTS = 'REMOVE_ALL_POSTS';
// export const RECEIVE_POST_ERRORS = 'RECEIVE_POST_ERRORS';

const receiveAllPosts = (posts) => {
    return {
        type: RECEIVE_ALL_POSTS,
        posts
    }
}

const receivePost = (post) => {
    return {
        type: RECEIVE_POST,
        post
    }
}

const removePost = (postId) => {
    return {
        type: REMOVE_POST,
        postId
    }
}

export const clearPosts = () => ({
    type: REMOVE_ALL_POSTS
})

// const receivePostErrors = (errors) => {
//     return {
//         type: RECEIVE_POST_ERRORS,
//         errors
//     }
// }

export const indexPosts = () => (dispatch) => {
    return (
        PostApiUtil.getAllPosts()
        .then(posts => dispatch(receiveAllPosts(posts)))
    )
}

export const showPost = (userId) => (dispatch) => {
    // debugger
    return (
        PostApiUtil.getPost(userId)
        .then(posts => dispatch(receivePost(posts)))
    )
}

export const createPost = (post) => (dispatch) => {
    // debugger
    return (
        PostApiUtil.createPost(post)
        .then(post => dispatch(receivePost(post)))
    )
}

export const updatePost = (postData, postId) => (dispatch) => {
    debugger
    return (
        PostApiUtil.editPost(postData, postId)
        .then(post => dispatch(receivePost(post)))
    )
}

export const destroyPost = (postId) => (dispatch) => {
    return (
        PostApiUtil.deletePost(postId)
        .then(() => dispatch(removePost(postId)))
    )
}

export const addPostPhoto = (post, postId) => (dispatch) => {
    return (
        PostApiUtil.addPostPhoto(post, postId)
        .then(post => dispatch(receivePost(post)))
    )
}