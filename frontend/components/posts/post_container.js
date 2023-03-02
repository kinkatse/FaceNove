import { connect } from 'react-redux';

import Post from './post';
import {
    indexPosts,
    createPost,
    destroyPost,
    clearPosts
} from '../../actions/post_actions';
import { clearComments, removePostComments } from '../../actions/comment_actions';
import { closeModal, openCreatePostModal, openEditPostModal, openPicModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        posts: state.entities.posts,
        likes: state.entities.likes,
        // userPosts: state.entities.posts[ownProps.match.params.userId],
        userId: ownProps.match.params.userId,
        currentUser: state.entities.users[state.session.id],
        modal: state.ui.modal,
        // Even though this isn't being passed anywhere, we need the
        // state to subscribe to this component or the color isnt updated
        // since localStorage wont update the page until we refresh
        color: state.ui.theme.color
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        indexPosts: ((userIds) => dispatch(indexPosts(userIds))),
        createPost: (post => dispatch(createPost(post))),
        destroyPost: (postId => dispatch(destroyPost(postId))),
        addPostPhoto: ((post, postId) => dispatch(addPostPhoto(post, postId))),
        openCreatePostModal: () => dispatch(openCreatePostModal()),
        openEditPostModal: (postId) => dispatch(openEditPostModal(postId)),
        removePostComments: ((postId) => dispatch(removePostComments(postId))),
        openPicModal: (postId, photoPostIds) => dispatch(openPicModal(postId, photoPostIds)),
        clearPosts: (() => dispatch(clearPosts())),
        clearComments: (() => dispatch(clearComments())),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)