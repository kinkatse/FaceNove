export const ALL_POSTS = 'ALL_POSTS';
export const GET_POST = 'GET_POST';

const allPosts = (posts) => {
    return {
        type: ALL_POSTS,
        posts
    }
}

const getPost = (post) => {
    return {
        type: GET_POST,
        post
    }
}

// export const recievePost = (postId) => (dispatch) => {
//     return (

//     )
// }