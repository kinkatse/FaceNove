import { RECEIVE_ALL_POSTS, RECEIVE_POST, REMOVE_POST, REMOVE_ALL_POSTS } from "../actions/post_actions";
import { RECEIVE_LIKE, REMOVE_LIKE } from "../actions/like_actions";

const postsReducer = (postState = {}, action) => {
    Object.freeze(postState);
    let newState;
    let postId;
    switch(action.type) {
        case RECEIVE_ALL_POSTS:
            return Object.assign({}, postState, action.posts);
        case RECEIVE_POST:
            return Object.assign({}, postState, action.post);
        case REMOVE_POST:
            newState = Object.assign({}, postState);
            delete newState[action.postId];
            return newState;
        case REMOVE_ALL_POSTS:
            return {}
        case RECEIVE_LIKE:
            let like = Object.values(action.like)[0]
            if (like.likeable_type === "Post") {
                postId = like.likeable_id
                newState = Object.assign({}, postState);
                newState[postId].likeIds.push(like.id)
                return newState;
            }
            return postState;
        case REMOVE_LIKE:
            if (action.like.likeable_type === "Post") {
                postId = action.like.likeable_id
                newState = Object.assign({}, postState);
                newState[postId].likeIds =
                newState[postId].likeIds.filter(likeId => likeId !== action.like.id);
                return newState;
            }
            return postState;
        default:
            return postState;
    }
}

export default postsReducer;