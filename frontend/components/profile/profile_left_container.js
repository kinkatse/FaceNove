import { connect } from 'react-redux';
import { showUser, updateUser } from '../../actions/user_actions';
import { openEditModal, openPicModal } from '../../actions/modal_actions';

import { withRouter } from 'react-router-dom';
// Need to have withRouter here or call the component with Route
// Those are the only two ways the container will access ownProps
import ProfileLeft from './profile_left'
import { clearPosts, destroyPost, updatePost } from '../../actions/post_actions';
import { clearComments, removePostComments } from '../../actions/comment_actions';
import { clearLikes } from '../../actions/like_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.match.params.userId],
        userId: ownProps.match.params.userId,
        currentUser: state.entities.users[state.session.id],
        currentUserId: state.session.id,
        posts: state.entities.posts,
        modal: state.ui.modal,
        // Even though this isn't being passed anywhere, we need the
        // state to subscribe to this component or the color isnt updated
        // since localStorage wont update the page until we refresh
        color: state.ui.theme.color
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeActiveTab: ownProps.changeActiveTab,
        updatePost: (postData, postId) => dispatch(updatePost(postData, postId)),
        destroyPost: (postId) => dispatch(destroyPost(postId)),
        removePostComments: (postId) => dispatch(removePostComments(postId)),
        openEditModal: () => dispatch(openEditModal()),
        updateUser: (user, userId) => dispatch(updateUser(user, userId)),
        openEditModal: () => dispatch(openEditModal()),
        openPicModal: (postId) => dispatch(openPicModal(postId))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileLeft))