import { connect } from 'react-redux';

import Home from './home';
import {
    indexPosts,
    showPost,
    createPost,
    destroyPost,
    clearPosts
} from '../../actions/post_actions';
import { clearComments, removePostComments } from '../../actions/comment_actions';
import { openCreatePostModal, openEditPostModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
    return {
        posts: state.entities.posts,
        // userPosts: state.entities.posts[ownProps.match.params.userId],
        currentUser: state.entities.users[state.session.id],
        modal: state.ui.modalRed,
        color: state.ui.colorRed.color
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        indexPosts: (() => dispatch(indexPosts())),
        showPost: (postId => dispatch(showPost(postId))),
        createPost: (post => dispatch(createPost(post))),
        destroyPost: (postId => dispatch(destroyPost(postId))),
        addPostPhoto: ((post, postId) => dispatch(addPostPhoto(post, postId))),
        openCreatePostModal: () => dispatch(openCreatePostModal()),
        openEditPostModal: (postId) => dispatch(openEditPostModal(postId)),
        removePostComments: ((postId) => dispatch(removePostComments(postId))),
        clearPosts: (() => dispatch(clearPosts())),
        clearComments: (() => dispatch(clearComments()))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)