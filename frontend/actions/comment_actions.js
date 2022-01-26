import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const REMOVE_ALL_COMMENTS = 'REMOVE_ALL_COMMENTS';
// export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';

const receiveAllComments = (comments) => {
    debugger
    return {
        type: RECEIVE_ALL_COMMENTS,
        comments
    }
}

const receiveComment = (comment) => {
    return {
        type: RECEIVE_COMMENT,
        comment
    }
}

const removeComment = (commentId) => {
    return {
        type: REMOVE_COMMENT,
        commentId
    }
}

export const removeAllComments = () => {
    return {
        type: REMOVE_ALL_COMMENTS
    }
}

// const receiveCommentErrors = (errors) => {
//     return {
//         type: RECEIVE_COMMENT_ERRORS,
//         errors
//     }
// }

export const indexPostComments = (postId) => (dispatch) => {
    debugger
    return (
        CommentApiUtil.getAllPostComments(postId)
        .then(comments => dispatch(receiveAllComments(comments)))
    )
}

export const indexUserComments = (userId) => (dispatch) => {
    debugger
    return (
        CommentApiUtil.getAllUserComments(userId)
        .then(comments => dispatch(receiveAllComments(comments)))
    )
}

// export const showComment = (commentId) => (dispatch) => {
//     return (
//         CommentApiUtil.getComment(commentId)
//         .then(comment => dispatch(receiveComment(comment)))
//     )
// }

export const createComment = (commentData) => (dispatch) => {
    return (
        CommentApiUtil.createComment(commentData)
        .then(comment => dispatch(receiveComment(comment)))
    )
}

export const updateComment = (commentData, commentId) => (dispatch) => {
    return (
        CommentApiUtil.editComment(commentData, commentId)
        .then(comment => dispatch(receiveComment(comment)))
    )
}

export const destroyComment = (commentId) => (dispatch) => {
    return (
        CommentApiUtil.deleteComment(commentId)
        .then(() => dispatch(removeComment(commentId)))
    )
}