import { connect } from 'react-redux';

import Comment from './comment';
import {
    // indexPostComments,
    // indexUserComments,
    indexComments,
    createComment,
    updateComment,
    destroyComment,
    clearComments
} from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        autherUserId: ownProps.userId,
        postId: ownProps.postId,
        comments: state.entities.comments,
        currentUser: state.entities.users[state.session.id],
        color: state.ui.colorRed.color
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        indexComments: (relatedId => dispatch(indexComments(relatedId))),
        // indexPostComments: (postId => dispatch(indexPostComments(postId))),
        // indexUserComments: (userId => dispatch(indexUserComments(userId))),
        createComment: (commentData) => dispatch(createComment(commentData)),
        updateComment: ((commentData, commentId) => dispatch(updateComment(commentData, commentId))),
        destroyComment: (commentId) => dispatch(destroyComment(commentId)),
        clearComments: (() => dispatch(clearComments()))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment)