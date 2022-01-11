export const getAllPosts = () => {
    return $.ajax({
        url: '/api/posts',
        method: 'GET'
    })
}

export const getPost = (postId) => {
    return $.ajax({
        url: `/api/posts/${postId}`,
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

export const editPost = (post, postId) => {
    return $.ajax({
        url: `/api/posts/${postId}`,
        method: 'PATCH',
        data: { post }
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