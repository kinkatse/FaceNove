import { RECEIVE_ALL_POSTS, RECEIVE_POST, REMOVE_POST } from "../actions/post_actions";

const postsReducer = (postState = {}, action) => {
    Object.freeze(postState);
    switch(action.type) {
        case RECEIVE_ALL_POSTS:
            return Object.assign({}, postState, action.posts)
        case RECEIVE_POST:
            return Object.assign({}, postState, { [action.post.id]: action.post })
        default:
            return postState;
    }
}

export default postsReducer;