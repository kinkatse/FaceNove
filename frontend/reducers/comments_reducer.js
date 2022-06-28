 import { RECEIVE_ALL_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT, REMOVE_POST_COMMENTS, REMOVE_ALL_COMMENTS } from "../actions/comment_actions";
 import { RECEIVE_LIKE, REMOVE_LIKE } from "../actions/like_actions";

 const commentsReducer = (commentState = {}, action) => {
     Object.freeze(commentState);
     let newState = Object.assign({}, commentState);
    let commentId;
    switch(action.type) {
        case RECEIVE_ALL_COMMENTS:
            return Object.assign({}, commentState, action.comments);
        case RECEIVE_COMMENT:
            return Object.assign({}, commentState, action.comment)
        case REMOVE_COMMENT:
            delete newState[action.commentId];
            return newState;
        case REMOVE_POST_COMMENTS:
            let commentsArr = Object.values(newState).filter(comment => comment.post_id !== action.postId)
            newState = {}
            commentsArr.forEach(comment => {
                newState[comment.id] = comment
            })
            return newState
        case REMOVE_ALL_COMMENTS:
            return {}
        case RECEIVE_LIKE:
            let like = Object.values(action.like)[0]
            if (like.likeable_type === "Comment") {
                commentId = like.likeable_id
                newState = Object.assign({}, commentState);
                newState[commentId].likeIds.push(like.id)
                return newState;
            }
            return commentState;
        case REMOVE_LIKE:
            if (action.like.likeable_type === "Comment") {
                commentId = action.like.likeable_id
                newState = Object.assign({}, commentState);
                newState[commentId].likeIds =
                newState[commentId].likeIds.filter(likeId => likeId !== action.like.id);
                return newState;
            }
            return commentState;
        default:
            return commentState;
    }
 }

 export default commentsReducer;