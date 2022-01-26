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
// import {
//     // indexPostComments,
//     // indexUserComments,
//     indexComments,
//     createComment,
//     updateComment,
//     destroyComment
// } from '../../actions/comment_actions';
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
        indexPosts: (() => dispatch(indexPosts())),
        showPost: (postId => dispatch(showPost(postId))),
        createPost: (post => dispatch(createPost(post))),
        // updatePost: ((post, postId) => dispatch(updatePost(post, postId))),
        destroyPost: (postId => dispatch(destroyPost(postId))),
        addPostPhoto: ((post, postId) => dispatch(addPostPhoto(post, postId))),
        // indexComments: (relatedId => dispatch(indexComments(relatedId))),
        // indexPostComments: (postId => dispatch(indexPostComments(postId))),
        // indexUserComments: (userId => dispatch(indexUserComments(userId))),
        // createComment: (commentData) => dispatch(createComment(commentData)),
        // updateComment: ((commentData, commentId) => dispatch(updateComment(commentData, commentId))),
        // destroyComment: (commentId) => dispatch(destroyComment(commentId)),
        openCreatePostModal: () => dispatch(openCreatePostModal()),
        openEditPostModal: (postId) => dispatch(openEditPostModal(postId)),
        clearPosts: (() => dispatch(clearPosts()))
        // openPostModal: () => dispatch(openPostModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)