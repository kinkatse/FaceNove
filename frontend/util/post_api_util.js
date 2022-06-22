export const getAllPosts = (userIds) => {
    return $.ajax({
        url: '/api/posts',
        method: 'GET',
        data: { userIds }
    })
}

export const getPost = (userId) => {
    return $.ajax({
        url: `/api/posts/${userId}`,
        method: 'GET'
    })
}

export const createPost = (postData) => {
    return $.ajax({
        url: `/api/posts`,
        method: 'POST',
        data: postData,
        contentType: false,
        processData: false
    })
}

export const editPost = (postData, postId) => {
    return $.ajax({
        url: `/api/posts/${postId}`,
        method: 'PATCH',
        data: postData,
        contentType: false,
        processData: false
    })
}

export const deletePost = (postId) => {
    return $.ajax({
        url: `/api/posts/${postId}`,
        method: 'DELETE',
    })
}

export const addPostPhoto = (post, postId) => {
    return $.ajax({
        url: `/api/posts/${postId}`,
        method: 'PATCH',
        data: post,
        contentType: false,
        processData: false
    })
}