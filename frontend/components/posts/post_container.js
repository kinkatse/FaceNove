import { connect } from 'react-redux';

import Post from './post';
import {
    indexPosts,
    createPost,
    destroyPost,
    clearPosts
} from '../../actions/post_actions';
import { clearComments } from '../../actions/comment_actions';
import { openCreatePostModal, openEditPostModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        posts: state.entities.posts,
        // userPosts: state.entities.posts[ownProps.match.params.userId],
        userId: ownProps.match.params.userId,
        currentUser: state.entities.users[state.session.id],
        modal: state.ui.modalRed,
        color: state.ui.colorRed.color
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
        clearPosts: (() => dispatch(clearPosts())),
        clearComments: (() => dispatch(clearComments()))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)