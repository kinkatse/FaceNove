import { connect } from 'react-redux';

import Comment from './comment';
import {
    indexComments,
    createComment,
    updateComment,
    destroyComment,
    clearComments
} from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        postUserId: ownProps.postUserId,
        postId: ownProps.postId,
        comments: state.entities.comments,
        currentUser: state.entities.users[state.session.id],
        // Even though this isn't being passed anywhere, we need the
        // state to subscribe to this component or the color isnt updated
        // since localStorage wont update the page until we refresh
        color: state.ui.theme.color,
        fromPhotoModal: ownProps.fromPhotoModal ? true : false
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        indexComments: (relatedId => dispatch(indexComments(relatedId))),
        createComment: (commentData) => dispatch(createComment(commentData)),
        updateComment: ((commentData, commentId) => dispatch(updateComment(commentData, commentId))),
        destroyComment: (commentId) => dispatch(destroyComment(commentId)),
        // clearComments: (() => dispatch(clearComments()))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment)