export const getAllComments = (relatedId) => {
    return $.ajax({
        url: '/api/comments',
        method: 'GET',
        data: relatedId,
    })
}

// export const getComment = (commentId) => {
//     return $.ajax({
//         url: `/api/comments/${commentId}`,
//         method: 'GET'
//     })
// }

export const createComment = (commentData) => {
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

export const deleteComment = (commentId) => {
    return $.ajax({
        url: `/api/comments/${commentId}`,
        method: 'DELETE'
    })
}