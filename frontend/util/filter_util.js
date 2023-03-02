export const filterPostsWithPhotos = (posts, userId) => {
    let postArr = Object.values(posts).reverse()
    // Grab only users posts
    let userPostsArr = []
    for (let post of postArr) {
        if (parseInt(userId) === post.user_id) userPostsArr.push(post)
    }
    // Grab only posts with photos
    let postsWithPhotosArr = []
    for (let post of userPostsArr) {
        if (post.postPhotoUrl) postsWithPhotosArr.push(post)
    }

    return postsWithPhotosArr
}

export const filterPhotoPostIds = (posts) => {
    return posts.map((post) => post.id)
}