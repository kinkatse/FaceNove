import * as PostApiUtil from '../util/post_api_util';

import { receiveAllLikes } from './like_actions'

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const REMOVE_ALL_POSTS = 'REMOVE_ALL_POSTS';
// export const RECEIVE_POST_ERRORS = 'RECEIVE_POST_ERRORS';

export const receiveAllPosts = (posts) => {
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

export const indexPosts = (userIds) => (dispatch) => {
    return (
        PostApiUtil.getAllPosts(userIds)
        .then(postsAndLikes => {
            dispatch(receiveAllPosts(postsAndLikes.posts))
            dispatch(receiveAllLikes(postsAndLikes.likes))
        })
    )
}

export const showPost = (userId) => (dispatch) => {
    return (
        PostApiUtil.getPost(userId)
        .then(posts => dispatch(receivePost(posts)))
    )
}

export const createPost = (postData) => (dispatch) => {
    return (
        PostApiUtil.createPost(postData)
        .then(post => dispatch(receivePost(post)))
    )
}

export const updatePost = (postData, postId) => (dispatch) => {
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