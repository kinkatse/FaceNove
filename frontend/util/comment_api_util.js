export const getAllComments = (relatedId) => {
    debugger
    return $.ajax({
        url: '/api/comments',
        method: 'GET',
        data: relatedId
    })
}

// export const getAllPostComments = (postId) => {
//     debugger
//     return $.ajax({
//         url: '/api/comments',
//         method: 'GET',
//         data: postId
//     })
// }

// export const getAllUserComments = (userId) => {
//     debugger
//     return $.ajax({
//         url: '/api/comments',
//         method: 'GET',
//         data: userId
//     })
// }

// export const getComment = (commentId) => {
//     return $.ajax({
//         url: `/api/comments/${commentId}`,
//         method: 'GET'
//     })
// }

export const createComment = (commentData) => {
    debugger
    return $.ajax({
        url: '/api/comments',
        method: 'POST',
        data: commentData,
        contentType: false,
        processData: false
    })
}

export const editComment = (commentData, commentId) => {
    return $.ajax({
        url: `/api/comments/${commentId}`,
        method: 'PATCH',
        data: commentData,
        contentType: false,
        processData: false
    })
}

export const deleteComment = () => {
    return $.ajax({
        url: `/api/comments/${commentId}`,
        method: 'DELETE'
    })
}