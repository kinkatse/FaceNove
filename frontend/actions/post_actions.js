import * as PostApiUtil from '../util/post_api_util'

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';

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

export const indexPosts = () => (dispatch) => {
    return (
        PostApiUtil.getAllPosts()
        .then(posts => dispatch(receiveAllPosts(posts)))
    )
}

export const showPost = (postId) => (dispatch) => {
    return (
        PostApiUtil.getPost(postId)
        .then(post => dispatch(receivePost(post)))
    )
}

export const updatePost = (post, postId) => (dispatch) => {
    return (
        PostApiUtil.editPost(post, postId)
        .then(post => dispatch(receivePost(post)))
    )
}

export const showPostPhoto = (post, postId) => (dispatch) => {
    return (
        PostApiUtil.addPostPhoto(post, postId)
        .then(post => dispatch(receivePost(post)))
    )
}