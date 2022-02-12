export const getAllLikes = (relatedId) => {
    return $.ajax({
        url: '/api/likes',
        method: 'GET',
        data: relatedId
    })
}

export const createLike = (likeData) => {
    return $.ajax({
        url: '/api/likes',
        method: 'POST',
        data: likeData
    })
}

export const deleteLike = (likeId) => {
    return $.ajax({
        url: `/api/likes/${likeId}`,
        method: 'DELETE'
    })
}