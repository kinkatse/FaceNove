import { connect } from 'react-redux';

import Post from './post'

const mapStateToProps = (state, ownProps) => {
    return {
        posts: state.entities.posts,
        userPosts: state.entities.posts[ownProps.match.params.userId],
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
        updatePost: ((post, postId) => dispatch(updatePost(post, postId))),
        deletePost: (postId => dispatch(deletePost(postId))),
        addPostPhoto: ((post, postId) => dispatch(addPostPhoto(post, postId))),
        // openPostModal: () => dispatch(openPostModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)