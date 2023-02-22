import { connect } from 'react-redux';
import { showUser } from '../../actions/user_actions';
import { openEditModal, openProfPicModal, openCovPicModal, openEditPostModal } from '../../actions/modal_actions';
import { clearLikes, indexLikes } from '../../actions/like_actions';

import Profile from './profile';
import { clearPosts, destroyPost, updatePost } from '../../actions/post_actions';
import { removePostComments } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        // ownProps is from Routes built in and we access path wildcard of 'userId'
        // (from our route path in app.jsx) to key into which user of our state entities
        user: state.entities.users[ownProps.match.params.userId],
        userId: ownProps.match.params.userId,
        currentUser: state.entities.users[state.session.id],
        currentUserId: state.session.id,
        posts: state.entities.posts,
        likes: state.entities.likes,
        modal: state.ui.modal,
        // Even though this isn't being passed anywhere, we need the
        // state to subscribe to this component or the color isnt updated
        // since localStorage wont update the page until we refresh
        color: state.ui.theme.color
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showUser: (userId => dispatch(showUser(userId))),
        indexLikes: (likeData) => dispatch(indexLikes(likeData)),
        updatePost: (postData, postId) => dispatch(updatePost(postData, postId)),
        destroyPost: (postId) => dispatch(destroyPost(postId)),
        removePostComments: (postId) => dispatch(removePostComments(postId)),
        destroyLike: ((like) => dispatch(destroyLike(like))),
        openLikesModal: (postId) => dispatch(openLikesModal(postId)),
        openEditModal: () => dispatch(openEditModal()),
        openEditPostModal: (postId) => dispatch(openEditPostModal(postId)),
        openProfPicModal: () => dispatch(openProfPicModal()),
        openCovPicModal: () => dispatch(openCovPicModal()),
        clearPosts: (() => dispatch(clearPosts())),
        clearLikes: (() => dispatch(clearLikes()))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)