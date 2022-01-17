export const getAllPosts = () => {
    return $.ajax({
        url: '/api/posts',
        method: 'GET'
    })
}

export const getPost = (userId) => {
    // debugger
    return $.ajax({
        url: `/api/posts/${userId}`,
        method: 'GET'
    })
}

export const createPost = (post) => {
    return $.ajax({
        url: `/api/posts`,
        method: 'POST',
        data: { post }
    })
}

export const editPost = (postData, postId) => {
    debugger
    return $.ajax({
        url: `/api/posts/${postId}`,
        method: 'PATCH',
        data: { postData }
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