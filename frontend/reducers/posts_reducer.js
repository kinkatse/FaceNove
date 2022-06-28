import { RECEIVE_ALL_POSTS, RECEIVE_POST, REMOVE_POST, REMOVE_ALL_POSTS } from "../actions/post_actions";
import { RECEIVE_LIKE, REMOVE_LIKE } from "../actions/like_actions";

const postsReducer = (postState = {}, action) => {
    Object.freeze(postState);
    let newState;
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
            let likeArr = Object.values(action.like)
            if (likeArr.length === 1) {
                let like = likeArr[0]
                let postId = like.likeable_id
                newState = Object.assign({}, postState);
                newState[postId].likeIds.push(like.id)
                return newState;
            }
            return postState;
        case REMOVE_LIKE:
            let postId = action.like.likeable_id
            newState = Object.assign({}, postState);
            newState[postId].likeIds =
            newState[postId].likeIds.filter(likeId => likeId !== action.like.id);
            return newState;
        default:
            return postState;
    }
}

export default postsReducer;