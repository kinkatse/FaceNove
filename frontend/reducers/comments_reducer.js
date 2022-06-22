 import { RECEIVE_ALL_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT, REMOVE_POST_COMMENTS, REMOVE_ALL_COMMENTS } from "../actions/comment_actions";

 const commentsReducer = (commentState = {}, action) => {
    let newState = Object.assign({}, commentState);
    Object.freeze(commentState);
    switch(action.type) {
        case RECEIVE_ALL_COMMENTS:
            return Object.assign({}, commentState, action.comments);
        case RECEIVE_COMMENT:
            return Object.assign({}, commentState, action.comment)
        case REMOVE_COMMENT:
            // newState = Object.assign({}, commentState);
            delete newState[action.commentId];
            return newState;
        case REMOVE_POST_COMMENTS:
            debugger
            // let temporaryState = Object.assign({}, commentState);
            let commentsArr = Object.values(newState).filter(comment => comment.post_id !== action.postId)
            newState = {}
            commentsArr.forEach(comment => {
                newState[comment.id] = comment
            })
            return newState;
        case REMOVE_ALL_COMMENTS:
            return {}
        default:
            return commentState;
    }
 }

 export default commentsReducer;