

const postsReducer = (postState = {}, action) => {
    Object.freeze(postState);
    switch(action.type) {
        case ALL_POSTS:
            return Object.assign({}, postState, action.posts)
        case GET_POST:
            return Object.assign({}, postState, { [action.post.id]: action.post })
        default:
            return postState;
    }
}

export default postsReducer;