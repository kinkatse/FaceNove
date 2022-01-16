import { connect } from 'react-redux';

import Post from './post';
import {
    indexPosts,
    showPost,
    createPost,
    updatePost,
    destroyPost,
    clearPosts
} from '../../actions/post_actions';
import { openEditPostModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    // debugger
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
    debugger
    return {
        indexPosts: (() => dispatch(indexPosts())),
        showPost: (postId => dispatch(showPost(postId))),
        createPost: (post => dispatch(createPost(post))),
        // updatePost: ((post, postId) => dispatch(updatePost(post, postId))),
        destroyPost: (postId => dispatch(destroyPost(postId))),
        addPostPhoto: ((post, postId) => dispatch(addPostPhoto(post, postId))),
        openEditPostModal: () => dispatch(openEditPostModal()),
        clearPosts: (() => dispatch(clearPosts()))
        // openPostModal: () => dispatch(openPostModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)